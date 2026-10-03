// Vídeo do hero: garante o início da reprodução e respeita "reduzir movimento".
(function () {
  var hero = document.querySelector('video.hv');
  if (!hero) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    hero.removeAttribute('autoplay');
    hero.pause();
    return;
  }

  var tryPlay = function () {
    var p = hero.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  };
  tryPlay();

  // Economiza bateria: pausa o vídeo do hero quando a aba fica em segundo plano.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) hero.pause();
    else tryPlay();
  });
})();

// Menu hambúrguer (celular)
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;

  var setOpen = function (open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) setOpen(false);
  });
})();
