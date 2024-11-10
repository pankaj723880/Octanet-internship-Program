// Script for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetID = this.getAttribute('href').slice(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
          
        });
    });
});

// Script for Hero Section Animation
const anime = document.getElementById('anime');
anime.style.opacity = 0;
window.addEventListener('load', function() {
    anime.style.transition = 'opacity 2s';
    anime.style.opacity = 1;
});

// Script for Menu Section
document.querySelectorAll('#menu section button').forEach((button, index) => {
    button.addEventListener('click', function() {
        alert(`You have selected: ${document.querySelectorAll('#menu section h3')[index].innerText}`);
    });
});

// Script for Menu Image Hover
document.querySelectorAll('#menu section img').forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s';
    });
    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
    });
});

// Script for Testimonials Section
const testimonials = document.getElementById('testimonials');
testimonials.style.opacity = 0;
window.addEventListener('scroll', function() {
    const rect = testimonials.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        testimonials.style.transition = 'opacity 2s';
        testimonials.style.opacity = 1;
    }
});

// Script for Contact Form
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent.`);
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Script for Smooth Scrolling for "View Our Menu" Button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
});
