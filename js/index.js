// DOM Elements
const body = document.body;
const themeSwitcher = document.getElementById("theme-switcher");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const sectionNavLinks = document.querySelectorAll(".section-nav a");
const sections = document.querySelectorAll("section");

// Smooth scrolling for navigation links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// Theme switcher
function initTheme() {
  // Check for saved theme preference or use system preference
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.removeAttribute("data-theme");
  }

  // Listen for theme toggle
  themeSwitcher.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    if (currentTheme === "dark") {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  // Listen for system theme changes
  prefersDarkScheme.addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        body.setAttribute("data-theme", "dark");
      } else {
        body.removeAttribute("data-theme");
      }
    }
  });
}

// Active section highlighting
function initScrollSpy() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update main nav links
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
        
        // Update section nav bullets
        sectionNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
        
        // Add active class to section
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Mobile menu toggle
function initMobileMenu() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Toggle aria-expanded for accessibility
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
    
    // Toggle body scroll when menu is open
    if (!expanded) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });
  
  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.style.overflow = "";
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.style.overflow = "";
    }
  });
}

// Initialize all functionality
function init() {
  smoothScroll();
  initTheme();
  initScrollSpy();
  initMobileMenu();
  
  // Set initial aria attributes
  hamburger.setAttribute("aria-label", "Toggle navigation menu");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-controls", "nav-menu");
  navMenu.setAttribute("id", "nav-menu");
  
  // Add loading class to body for initial animation
  body.classList.add("loaded");
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", init);
