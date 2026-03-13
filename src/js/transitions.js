const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

const smoothScroll = (target) => {
  const targetSection = document.querySelector(target);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
};

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});