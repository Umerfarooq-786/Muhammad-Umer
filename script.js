// Simple JS for reveal on scroll, skill bar animation, year update
document.addEventListener('DOMContentLoaded', function() {
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal elements on scroll
  const revealElems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {threshold: 0.12});
  revealElems.forEach(el => revealObserver.observe(el));

  // Animate skill bars when skills section visible
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillsSection = document.getElementById('skills');
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillFills.forEach(fill => {
          const val = fill.getAttribute('data-fill') || 60;
          fill.style.width = val + '%';
        });
      }
    });
  }, {threshold: 0.25});
  if (skillsSection) skillObserver.observe(skillsSection);

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(ev) {
      ev.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});