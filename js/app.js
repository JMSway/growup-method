/* Theme Toggle — always dark on load */
document.querySelector('.theme-toggle').addEventListener('click', function () {
  var t = document.documentElement;
  t.setAttribute('data-theme', t.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* Fade-in on scroll */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(function (el) { io.observe(el); });
