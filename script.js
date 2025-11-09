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

// Download button click event
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function() {
    // Download the file
    showDownloadNotification();
    
    // Start download after 1 second
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'CatGirl.7z';
        link.download = 'CatGirl.7z';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000);
});

function showDownloadNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff6ec7 0%, #7c3aed 100%);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(255, 110, 199, 0.5);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 2rem;">✅</span>
            <div>
                <strong style="display: block; margin-bottom: 0.5rem;">Download Ready!</strong>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Your download will start shortly.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Define animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
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