// Get references to elements
const header = document.getElementById("header");
const sl = document.getElementById("single-light");
const dl = document.getElementById("double-light");
const v = document.getElementById("vespa-link");
const model = document.getElementById("model");
const reserveBtn = document.getElementById("reserve-btn");
const nav = document.querySelector('nav');

let currentModel = "Single Light";
let isReserved = false;

// Update background and text when clicking buttons
if (sl && dl && v && model) {
  sl.onclick = function (event) {
    event.preventDefault();
    header.style.backgroundImage = "url('images/single light.jpg')";
    model.innerHTML = "Single Light";
    currentModel = "Single Light";
    updateReserveButton();
  };

  dl.onclick = function (event) {
    event.preventDefault();
    header.style.backgroundImage = "url('images/double light.webp')";
    model.innerHTML = "Double Light";
    currentModel = "Double Light";
    updateReserveButton();
  };

  v.onclick = function (event) {
    event.preventDefault();
    header.style.backgroundImage = "url('images/vespa.jpg')";
    model.innerHTML = "Vespa";
    currentModel = "Vespa";
    updateReserveButton();
  };
}

// Handle reservation
if (reserveBtn) {
  reserveBtn.onclick = function(event) {
    event.preventDefault();
    if (!isReserved) {
      isReserved = true;
      const reservationDate = new Date().toISOString().split('T')[0]; // Get current date
      alert(`Reservation confirmed for ${currentModel} on ${reservationDate}`);
      updateReserveButton();
    } else {
      isReserved = false;
      updateReserveButton();
    }
  };
}

function updateReserveButton() {
  if (reserveBtn) {
    if (isReserved) {
      reserveBtn.textContent = "Cancel Reservation";
      reserveBtn.classList.add("btn-reserved");
    } else {
      reserveBtn.textContent = "Reserve Now";
      reserveBtn.classList.remove("btn-reserved");
    }
  }
}

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Footer animations
const footerSections = document.querySelectorAll('.footer-section');
const footer = document.querySelector('footer');

function checkFooterVisibility() {
  const footerRect = footer.getBoundingClientRect();
  const isVisible = (footerRect.top <= window.innerHeight) && (footerRect.bottom >= 0);

  if (isVisible) {
    footerSections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }
}

window.addEventListener('scroll', checkFooterVisibility);
window.addEventListener('resize', checkFooterVisibility);
checkFooterVisibility();

// Add hover effect to social media icons
const socialIcons = document.querySelectorAll('.socials a, .social-icons a');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'rotate(360deg)';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotate(0deg)';
  });
});

// Smooth transition for nav background on scroll
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  } else {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  }

  lastScrollTop = scrollTop;
});

