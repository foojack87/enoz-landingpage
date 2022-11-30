'use strict';

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const btnNav = document.querySelector('.btn-mobile-nav');

const allLinks = document.querySelectorAll('a:link');

btnNav.addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.toggle('nav-open');
});

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({ top: 0, bottom: 'smooth' });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (link.classList.contains('main-nav-link'))
      header.classList.toggle('nav-open');
  });
});

//// STICKY NAV ////

const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHero);
