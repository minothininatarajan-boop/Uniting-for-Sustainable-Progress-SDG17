document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribeForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Subscription Data:', data);
        
        // Show success message
        alert('Thank you for signing up, ' + data['First Name'] + '! You are now part of the global movement.');
        
        // Reset form
        form.reset();
    });
});

// This adds a slight zoom effect when you hover over a logo
const partnerLogos = document.querySelectorAll('.partner-bar .logos img');

partnerLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = '0.3s';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });
});