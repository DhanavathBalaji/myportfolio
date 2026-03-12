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