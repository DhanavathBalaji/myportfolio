
// Initialize animation library
document.addEventListener("DOMContentLoaded", function () {

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

});




/* -----------------------------
   Smooth Scrolling Navigation
------------------------------*/

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      const headerHeight = document.querySelector("header").offsetHeight;

      const offsetPosition =
        targetSection.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

    }

    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

  });

});




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




/* -----------------------------
   Navbar Shadow on Scroll
------------------------------*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }

});


/* -----------------------------
   Card Hover Animation
------------------------------*/

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


/* -----------------------------
   Section Reveal on Scroll
------------------------------*/

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

sections.forEach(section => {
  sectionObserver.observe(section);
});


/* -----------------------------
   Scroll Progress Indicator
------------------------------*/

window.addEventListener("scroll", () => {

  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  document.documentElement.style.setProperty(
    "--scroll-progress",
    progress + "%"
  );

});
=======
// Smooth scrolling effect for navigation links
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Linear easing function
  function ease(t, b, c, d) {
      return c * t / d + b;
  }

  requestAnimationFrame(animation);
}

// Handle click events on navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();

          // Remove the 'active' class from all links
          navLinks.forEach(link => link.classList.remove('active'));

          // Add the 'active' class to the clicked link
          event.target.classList.add('active');

          const targetId = event.target.getAttribute('href');
          smoothScroll(targetId, 1000); // 1000ms = 1 second
      });
  });
});

// Form submission
 document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form');

  contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = contactForm.elements['name'];
      const emailInput = contactForm.elements['email'];
      const messageInput = contactForm.elements['message'];

      // Basic validation
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
          alert('Please fill out all fields before submitting.');
          return;
      }

      // You can add further processing here (e.g., sending the data to a server)

      alert('Message sent successfully!');
      contactForm.reset();
  });
});
  

