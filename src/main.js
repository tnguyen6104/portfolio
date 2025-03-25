document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const modeToggle = document.createElement('button');
    modeToggle.textContent = 'Dark Mode';
    modeToggle.style.position = 'fixed';
    modeToggle.style.top = '20px';
    modeToggle.style.right = '20px';
    modeToggle.style.padding = '5px 10px';
    modeToggle.style.borderRadius = '5px';
    modeToggle.style.cursor = 'pointer';
    document.body.appendChild(modeToggle);

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Light Mode';
        } else {
            modeToggle.textContent = 'Dark Mode';
        }
    });

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
});
