// Set the initial mode text based on the current mode

document.addEventListener('DOMContentLoaded', () => {
    const modeText = document.getElementById('mode-text');
    if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = 'Dark Mode';
    } else {
        modeText.textContent = 'Light Mode';
    }
});
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// faq question

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faq = question.parentElement;
        faq.classList.toggle('active');

        // Close other open FAQs
        document.querySelectorAll('.faq').forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove('active');
            }
        });
    });
});

// contact validation

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// validate email

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// toggle dark mode

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const modeText = document.getElementById('mode-text');
    if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        modeText.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// dark mode 

function applyDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    const modeText = document.getElementById('mode-text');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        modeText.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        modeText.textContent = 'Light Mode';
    }
}

// apply dark mode

document.addEventListener('DOMContentLoaded', () => {
    applyDarkModePreference();
});

// scroll content

function scrollToContent() {
    document.getElementById('why-german').scrollIntoView({ behavior: 'smooth' });
}

// slider

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(function() {
  showSlides(slideIndex += 1);
}, 3000); // Change slide every 3 seconds


// links

function navigateToPage(link) {
    window.location.href = link; // Replace with your target page URL
  }