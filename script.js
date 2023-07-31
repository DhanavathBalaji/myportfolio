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
  

