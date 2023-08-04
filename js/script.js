'use strict';

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const btnNav = document.querySelector('.btn-mobile-nav');
const navCta = document.querySelector('.nav-cta');

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
  const domainURL = '/';

  if (currentURL.includes('zh')) {
    // Remove 'zh' if it exists
    window.location.href = domainURL;
  } else {
    // Add 'zh' if it doesn't exist
    window.location.href = '/zh';
  }
}
