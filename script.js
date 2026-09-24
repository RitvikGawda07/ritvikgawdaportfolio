const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
  items.forEach(item => observer.observe(item));
} else items.forEach(item => item.classList.add('visible'));
