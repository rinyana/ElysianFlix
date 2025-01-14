

/*for highlighting current page */
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-item a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
      }
  });
});

// Function to scroll images to the left or right
function scrollImages(direction) {
  const wrapper = document.querySelector('.image-wrapper');
  const scrollAmount = 220; // Adjust this value for the scroll speed (i.e., the number of pixels to scroll)

  wrapper.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function scrollTrailers(direction) {
  const wrapper = document.querySelector('.image-wrapper');
  const scrollAmount = 300;  // Adjust this value for more or less scroll per click

  // Scroll left or right
  if (direction === 1) {
      wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else if (direction === -1) {
      wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

// tuka backgrounf trailer pic
document.querySelectorAll('.trailer-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
      // Get the background image from the data-bg attribute
      const bgImage = item.getAttribute('data-bg');
      document.querySelector('.trailer-container').style.backgroundImage = bgImage;
  });

  item.addEventListener('mouseleave', function() {
      // Optionally revert the background image on mouse leave
      document.querySelector('.trailer-container').style.backgroundColor = "#4e1b1bdd"; // Default background
  });
});
