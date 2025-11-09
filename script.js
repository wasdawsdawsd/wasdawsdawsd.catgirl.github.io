// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.feature-card, .module-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Navigation scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Download button click event (safe attach)
const downloadBtn = document.getElementById('downloadBtn');
const DOWNLOAD_URL = 'https://workupload.com/file/qHB9nPKgt3K';
const DOWNLOAD_PASSWORD = 'shade1234';

if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
        // Try to show a native browser notification with the password,
        // then open the workupload link in a new tab.
        showDownloadNotification(DOWNLOAD_PASSWORD);

        // Open the download link in a new tab (Chrome will handle it)
        setTimeout(() => {
            try {
                window.open(DOWNLOAD_URL, '_blank');
            } catch (e) {
                // fallback to changing location if popup was blocked
                window.location.href = DOWNLOAD_URL;
            }
        }, 500);
    });
}

function showDownloadNotification(password) {
    // Use the Notifications API where available (works in Chrome)
    const bodyText = `password is ${password}`;

    function sendNotification() {
        try {
            new Notification('Download info', { body: bodyText });
        } catch (e) {
            // If Notification constructor fails, fallback to alert
            alert(bodyText);
        }
    }

    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            sendNotification();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    sendNotification();
                } else {
                    alert(bodyText);
                }
            }).catch(() => {
                alert(bodyText);
            });
        } else {
            // permission denied
            alert(bodyText);
        }
    } else {
        // Notifications not supported
        alert(bodyText);
    }
}

// Mouse cursor effect (optional)
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: rgba(255, 110, 199, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: cursorFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(cursor);
    
    setTimeout(() => cursor.remove(), 1000);
});

// Cursor fade animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorFade {
        to {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cursorStyle);

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Active navigation link display
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
