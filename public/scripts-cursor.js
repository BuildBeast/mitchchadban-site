(function () {
  const supportsCursor = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!supportsCursor) return;

  function initCursor() {
    let cursor = document.querySelector('.cursor');

    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor';
      cursor.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cursor);
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const ease = 0.22;

    function tick() {
      x += (tx - x) * ease;
      y += (ty - y) * ease;

      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';

      requestAnimationFrame(tick);
    }

    tick();

    window.addEventListener('pointermove', (event) => {
      tx = event.clientX;
      ty = event.clientY;
    }, { passive: true });

    window.addEventListener('pointerdown', () => {
      cursor.classList.add('is-down');
    });

    window.addEventListener('pointerup', () => {
      cursor.classList.remove('is-down');
    });

    const hoverSelector = 'a, button, [role="button"], [data-cursor="link"]';

    document.addEventListener('pointerover', (event) => {
      const hit = event.target && event.target.closest
        ? event.target.closest(hoverSelector)
        : null;

      if (hit) cursor.classList.add('is-link');
    });

    document.addEventListener('pointerout', (event) => {
      const hit = event.target && event.target.closest
        ? event.target.closest(hoverSelector)
        : null;

      if (hit) cursor.classList.remove('is-link');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
  } else {
    initCursor();
  }
})();
