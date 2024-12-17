document.addEventListener("DOMContentLoaded", function () {

    const counterElement = document.getElementById("custom-counter");
    if (!counterElement) {
        console.error("Counter element with ID 'custom-counter' not found.");
        return;
    }

    // Custom counter configuration
    const start = 0;
    const end = 37004515;
    const step = 200000; // Increment value
    const duration =100; // Total duration in milliseconds
    const totalSteps = Math.ceil(end / step); // Total number of increments
    const interval = Math.floor(duration / totalSteps); // Time between increments

    // Initialize the counter
    let current = start;
    counterElement.textContent = current.toLocaleString(); // Format the initial value

    // Start the custom counter
    const counterInterval = setInterval(() => {
        current += step;
        if (current >= end) {
            current = end; 
            clearInterval(counterInterval); // Stop the interval
        }
        counterElement.textContent = current.toLocaleString(); // Update the display
    }, interval);
});

// Select all video elements
const videos = document.querySelectorAll('.video-item video');

videos.forEach((video) => {
  // Play video on hover
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  // Pause video when hover ends
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
  });
});

// Scroll Up Button Functionality
const scrollUpBtn = document.getElementById("scroll-up-btn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add("visible");
  } else {
    scrollUpBtn.classList.remove("visible");
  }
});

// Scroll to top smoothly when button is clicked
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Select all video elements
const video = document.querySelectorAll('.client_video_display video');

video.forEach((video) => {
  // Play video on hover
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  // Pause video when hover ends
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
  });
});

const faqItems = document.querySelectorAll('.faq_item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.fa-solid');

      question.addEventListener('click', () => {
        item.classList.toggle('active');
        icon.classList.toggle('active');
      });
    });