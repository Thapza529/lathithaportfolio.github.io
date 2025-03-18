// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
const submitBtn = document.getElementById('submit-form');
if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const nameInput = document.getElementById('name-input');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Validate Name
        if (!nameInput.value.trim()) {
            nameInput.style.borderColor = 'red';
            