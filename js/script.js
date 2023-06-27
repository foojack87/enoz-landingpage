'use strict';

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const btnNav = document.querySelector('.btn-mobile-nav');
const navCta = document.querySelector('.nav-cta');

// const allLinks = document.querySelectorAll('a:link');

btnNav.addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.toggle('nav-open');
});

// Detect when the divs enter the viewport
window.addEventListener('scroll', function () {
  const slideInDivs = document.querySelectorAll('.slide-in');
  slideInDivs.forEach(function (div) {
    const bounding = div.getBoundingClientRect();

    if (bounding.top < window.innerHeight) {
      div.classList.add('show'); // Add show class to trigger the slide-in animation
    }
  });
});
// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     const href = link.getAttribute('href');

//     if (href === '#') {
//       window.scrollTo({ top: 0, bottom: 'smooth' });
//     }

//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (link.classList.contains('main-nav-link'))
//       header.classList.toggle('nav-open');
//   });
// });

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

// Modal

// Get the modal element
const modal = document.getElementById('about_modal');

// Get the link that opens the modal
const link = document.getElementById('about_nav');

// Get the close button element
const closeBtn = document.getElementsByClassName('close')[0];

// Open the modal when the link is clicked
link.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

// change language

function changeLanguage() {
  const currentURL = window.location.href;

  // Check if the current URL includes "/zh" or "/zh.html"
  if (currentURL.includes('/zh') || currentURL.includes('/zh.html')) {
    // Remove "/zh" or "/zh.html" from the URL
    let newURL = currentURL.replace(/\/zh(.html)?/, '');

    // Remove the hash part of the URL
    newURL = newURL.replace(/#.*/, '');

    window.location.href = newURL; // Redirect to the modified URL (enoz.com)
  } else {
    window.location.href = currentURL + 'zh.html';
  }
}
