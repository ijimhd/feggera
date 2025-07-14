const images = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate');
    observer.unobserve(entry.target); // Stop observing after animation triggers once
    }
});
}, {
threshold: 0.1 // Trigger when 10% of the image is visible
});

images.forEach(img => {
observer.observe(img);
});