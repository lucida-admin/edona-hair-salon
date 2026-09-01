/**
 * Edona Hair Salon - Main JavaScript
 * Handles mobile menu, smooth scrolling, and header effects
 */

// Initialize DOM elements
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/**
 * Mobile menu toggle functionality
 * Toggles active class on menu button and nav menu
 */
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

/**
 * Close mobile menu when a navigation link is clicked
 * Provides better UX for mobile users
 */
if (navMenu) {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle) menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

/**
 * Smooth scroll handling for anchor links
 * Prevents default link behavior and scrolls smoothly to target sections
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/**
 * Dynamic header shadow on scroll
 * Adds subtle shadow to header when page is scrolled
 */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 0) {
      header.style.boxShadow = "0 1px 0 rgba(53, 29, 20, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }
  }
});

/**
 * Close mobile menu on outside click
 * Allows users to close menu by clicking anywhere outside of header
 */
document.addEventListener("click", function (event) {
  const header = document.querySelector("header");
  if (header && navMenu && menuToggle) {
    if (
      !header.contains(event.target) &&
      navMenu.classList.contains("active")
    ) {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }
});

/**
 * Document ready state
 * Logs when site is fully loaded for debugging
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Edona Hair Salon - Website loaded successfully");
});
