// University Admissions Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Tab functionality for university partners
    const tabs = document.querySelectorAll('.tabs span');
    const cards = document.querySelector('.card-grid');
    
    // University data for different regions
    const universityData = {
        'United Kingdom': [
            {
                name: 'University of Cambridge',
                description: 'Study at one of the most prestigious institutions in the world, renowned for academic excellence and groundbreaking research.',
                image: 'Cambridge University Image'
            },
            {
                name: 'Imperial College London',
                description: 'Leading institution focusing on science, engineering, medicine and business, consistently ranked among the world\'s best.',
                image: 'Imperial College Image'
            },
            {
                name: 'London School of Economics',
                description: 'World-class excellence in social sciences, economics, politics, and law with a truly global perspective.',
                image: 'LSE London Image'
            }
        ],
        'United States': [
            {
                name: 'Harvard University',
                description: 'Ivy League institution known for excellence in education, research, and producing world leaders across all fields.',
                image: 'Harvard University Image'
            },
            {
                name: 'Stanford University',
                description: 'Leading research university in Silicon Valley, renowned for innovation, entrepreneurship, and cutting-edge technology.',
                image: 'Stanford University Image'
            },
            {
                name: 'MIT',
                description: 'World\'s leading institution for science, technology, engineering, and mathematics education and research.',
                image: 'MIT Image'
            }
        ],
        'Europe': [
            {
                name: 'ETH Zurich',
                description: 'Switzerland\'s premier technical university, consistently ranked among the world\'s top institutions for engineering and technology.',
                image: 'ETH Zurich Image'
            },
            {
                name: 'Sorbonne University',
                description: 'Historic French university renowned for humanities, sciences, and medicine with a rich academic tradition.',
                image: 'Sorbonne University Image'
            },
            {
                name: 'Technical University of Munich',
                description: 'Germany\'s top technical university, leading in engineering, natural sciences, and innovation.',
                image: 'TUM Image'
            }
        ],
        'Canada': [
            {
                name: 'University of Toronto',
                description: 'Canada\'s leading research university, consistently ranked among the world\'s top public universities.',
                image: 'University of Toronto Image'
            },
            {
                name: 'McGill University',
                description: 'Prestigious Canadian university known for its rigorous academics and diverse international community.',
                image: 'McGill University Image'
            },
            {
                name: 'University of British Columbia',
                description: 'World-class research university located in beautiful Vancouver, known for innovation and sustainability.',
                image: 'UBC Image'
            }
        ],
        'Australia': [
            {
                name: 'University of Melbourne',
                description: 'Australia\'s leading university, consistently ranked #1 in Australia and among the world\'s best.',
                image: 'University of Melbourne Image'
            },
            {
                name: 'Australian National University',
                description: 'Premier research university in Canberra, known for excellence in research and graduate programs.',
                image: 'ANU Image'
            },
            {
                name: 'University of Sydney',
                description: 'Historic university with beautiful campus, renowned for academic excellence and research innovation.',
                image: 'University of Sydney Image'
            }
        ]
    };
    
    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update university cards based on selected region
            const region = this.textContent;
            updateUniversityCards(region);
        });
    });
    
    // Function to update university cards
    function updateUniversityCards(region) {
        const universities = universityData[region] || universityData['United Kingdom'];
        
        cards.innerHTML = universities.map(uni => `
            <div class="uni-card">
                <div class="card-img-placeholder">${uni.image}</div>
                <h3>${uni.name}</h3>
                <p>${uni.description}</p>
                <button class="btn-sm">Apply Now</button>
            </div>
        `).join('');
        
        // Add click event listeners to new Apply Now buttons
        addApplyButtonListeners();
    }
    
    // Function to add event listeners to Apply Now buttons
    function addApplyButtonListeners() {
        const applyButtons = document.querySelectorAll('.btn-sm');
        applyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const universityName = this.parentElement.querySelector('h3').textContent;
                alert(`Application process for ${universityName} will be available soon! Please contact us for more information.`);
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter');
    const newsletterInput = newsletterForm.querySelector('input');
    const newsletterButton = newsletterForm.querySelector('button');
    
    newsletterButton.addEventListener('click', function() {
        const email = newsletterInput.value.trim();
        
        if (email && isValidEmail(email)) {
            alert('Thank you for subscribing to our newsletter! You will receive updates about university admissions and study opportunities.');
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Hero buttons functionality
    const getStartedBtn = document.querySelector('.btn-primary');
    const watchVideoBtn = document.querySelector('.btn-video');
    
    getStartedBtn.addEventListener('click', function() {
        alert('Welcome to EduGlobal! Our admissions counselor will contact you soon to help you get started with your university application journey.');
    });
    
    watchVideoBtn.addEventListener('click', function() {
        alert('Video feature coming soon! This will showcase student success stories and university campus tours.');
    });
    
    // Mobile menu toggle (for future mobile responsiveness)
    const mobileMenuBtn = document.querySelector('.fa-bars');
    const navLinksContainer = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinksContainer.classList.toggle('mobile-active');
    });
    
    // Search functionality placeholder
    const searchIcon = document.querySelector('.fa-search');
    searchIcon.addEventListener('click', function() {
        alert('Search functionality coming soon! You will be able to search for universities, courses, and programs.');
    });
    
    // Initialize with default Apply Now button listeners
    addApplyButtonListeners();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
});