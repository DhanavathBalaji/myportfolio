// Initialize AOS animation library
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // Smooth scroll for navigation links
  // Smooth scroll with navbar offset

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const targetId = this.getAttribute("href");
const targetSection = document.querySelector(targetId);

const navbarHeight = document.querySelector("nav").offsetHeight;

const offsetPosition = targetSection.offsetTop - navbarHeight - 50;

window.scrollTo({
top: offsetPosition,
behavior: "smooth"
});

});

});

    

(() => {
  const root = document.documentElement;

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const accentSelects = document.querySelectorAll(".accent-select");

  const menuToggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("primary-navigation");

  const validModes = ["light", "dark"];
  const validAccents = ["emerald", "violet"];

  // Safe localStorage access.
  function readPreference(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Theme switching still works if storage is unavailable.
    }
  }

  // Restore preferences, defaulting to Emerald Light.
  let mode = validModes.includes(readPreference("portfolio-mode"))
    ? readPreference("portfolio-mode")
    : "light";

  let accent = validAccents.includes(readPreference("portfolio-accent"))
    ? readPreference("portfolio-accent")
    : "emerald";

  function applyTheme() {
    root.dataset.mode = mode;
    root.dataset.accent = accent;

    if (themeIcon) {
      themeIcon.textContent = mode === "dark" ? "☀" : "☾";
    }

    if (themeToggle) {
      const label = mode === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode";

      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
    }

    // Keep desktop and mobile selectors synchronized.
    accentSelects.forEach(select => {
      select.value = accent;
    });
  }

  // Light / dark mode toggle.
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      mode = mode === "light" ? "dark" : "light";

      savePreference("portfolio-mode", mode);
      applyTheme();
    });
  }

  // Emerald / violet accent selection.
  accentSelects.forEach(select => {
    select.addEventListener("change", () => {
      if (validAccents.includes(select.value)) {
        accent = select.value;

        savePreference("portfolio-accent", accent);
        applyTheme();
      }
    });
  });

  // Mobile navigation.
  function setMenuOpen(open) {
    if (!menuToggle || !navigation) return;

    navigation.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      setMenuOpen(!isOpen);
    });

    navigation.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener("click", event => {
      if (
        !event.target.closest(".site-header") &&
        menuToggle.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        const wasOpen =
          menuToggle.getAttribute("aria-expanded") === "true";

        setMenuOpen(false);

        if (wasOpen) {
          menuToggle.focus();
        }
      }
    });

    // Close menu when returning to desktop width.
    window.matchMedia("(min-width: 761px)")
      .addEventListener("change", () => {
        setMenuOpen(false);
      });
  }

  // Initialize before displaying the page.
  applyTheme();
})();

  // Contact form submission (basic validation)
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = contactForm.elements['name'];
      const emailInput = contactForm.elements['email'];
      const messageInput = contactForm.elements['message'];

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill out all fields before submitting.');
        return;
      }

      alert('Message sent successfully!');
      contactForm.reset();
    });
  }
});

// Navbar shadow on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }

  // Scroll progress indicator
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  document.documentElement.style.setProperty("--scroll-progress", progress + "%");
});

// Card hover animation
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
    card.style.transition = "0.3s";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Section reveal on scroll
const sections = document.querySelectorAll("section");
const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("section-visible");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});
sections.forEach(section => sectionObserver.observe(section));
