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
