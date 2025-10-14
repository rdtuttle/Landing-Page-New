document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent('Hello, I am interested in your video editing work. My email: ' + email);
    window.location.href = `mailto:russelltuttle1@gmail.com?subject=${subject}&body=${body}`;
});
