/**
 * edonahair - Main JavaScript
 * Handles mobile menu, smooth scrolling, and header effects
 * Cross-browser compatible
 */

/**
 * Throttle function for better performance on scroll events
 * @param {Function} func - Function to throttle
 * @param {number} wait - Wait time in milliseconds
 */
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

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
 * Smooth scroll handling for anchor links with custom duration
 * Prevents default link behavior and scrolls smoothly to target sections
 * Duration: 1000ms for slow, noticeable animation
 */
function smoothScrollToElement(element, duration = 1000) {
  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const distance = targetPosition - startPosition;
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth deceleration
    const easeProgress = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      smoothScrollToElement(document.querySelector(href), 1200);
    }
  });
});

/**
 * Dynamic header shadow on scroll with throttling for performance
 * Adds subtle shadow to header when page is scrolled
 */
const handleScroll = throttle(function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 0) {
      header.style.boxShadow = "0 1px 0 rgba(53, 29, 20, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }
  }
}, 100);

window.addEventListener("scroll", handleScroll, false);

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
 * Ensures all functionality is initialized when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
  // Site loaded successfully - ready for user interaction
});
