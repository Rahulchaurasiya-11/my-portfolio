// Select all navigation buttons
const navLinks = document.querySelectorAll('.nav-link');

// External URLs to navigate to
const urls = {
//   home: 'https://example.com/home',
//   about: 'https://example.com/about',
//   skills: 'https://example.com/skills',
//   certifications: 'https://example.com/certifications',
//   projects: 'https://example.com/projects',
//   contact: 'https://example.com/contact'
};

// Add click event listeners to each nav button
navLinks.forEach(button => {
  button.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    if (urls[target]) {
      window.open(urls[target], '_blank');
    }
  });
});

// Toggle mobile menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Theme switcher functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

// Sticky header functionality on scroll
window.onscroll = () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

