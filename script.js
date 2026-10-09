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

    
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("primary-navigation");

if (menuToggle && navigation) {
  const mobileQuery = window.matchMedia("(max-width: 760px)");

  function setMenu(open) {
    navigation.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));

    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  }

  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    setMenu(!isOpen);
  });

  // Close after selecting a section.
  navigation.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      setMenu(false);
    });
  });

  // Close when clicking outside the header.
  document.addEventListener("click", event => {
    if (
      mobileQuery.matches &&
      !event.target.closest(".site-header")
    ) {
      setMenu(false);
    }
  });

  // Close using the Escape key.
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Reset the menu when moving between mobile and desktop.
  mobileQuery.addEventListener("change", () => {
    setMenu(false);
  });
}

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
