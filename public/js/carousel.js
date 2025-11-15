/**
 * Testimonials Carousel
 * Handles the functionality of the testimonials carousel with smooth animations
 */
class TestimonialsCarousel {
    constructor() {
        // Elements
        this.carousel = document.querySelector('.testimonials-carousel');
        this.track = document.querySelector('.testimonials-track');
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');

        // State
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.isAnimating = false;
        this.autoplayInterval = null;

        // Initialize
        this.init();
    }

    init() {
        // Check if all required elements exist
        if (!this.carousel || !this.track || !this.prevBtn || !this.nextBtn) {
            console.warn('Carousel elements not found. Skipping initialization.');
            return;
        }

        // Set up event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Set up dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Set up touch events for mobile
        this.setupTouchEvents();

        // Start autoplay
        this.startAutoplay();

        // Pause autoplay on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoplay());

        // Initial position
        this.updateCarousel();
    }

    setupTouchEvents() {
        let startX, moveX, threshold = 100;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoplay();
        }, { passive: true });

        this.carousel.addEventListener('touchmove', (e) => {
            if (!startX) return;
            moveX = e.touches[0].clientX;
        }, { passive: true });

        this.carousel.addEventListener('touchend', () => {
            if (!startX || !moveX) return;

            const diff = startX - moveX;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }

            startX = null;
            moveX = null;
            this.startAutoplay();
        }, { passive: true });
    }

    prevSlide() {
        if (this.isAnimating) return;

        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.updateCarousel('prev');
    }

    nextSlide() {
        if (this.isAnimating) return;

        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.updateCarousel('next');
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide) return;

        const direction = index > this.currentSlide ? 'next' : 'prev';
        this.currentSlide = index;
        this.updateCarousel(direction);
    }

    updateCarousel(direction = 'next') {
        this.isAnimating = true;

        // Update transform
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;

        // Update active dot
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Add animation classes based on direction
        if (direction === 'next') {
            this.slides[this.currentSlide].classList.add('slide-in');
            const prevSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
            this.slides[prevSlide].classList.add('slide-out');
        } else {
            this.slides[this.currentSlide].classList.add('slide-in');
            const nextSlide = (this.currentSlide + 1) % this.slideCount;
            this.slides[nextSlide].classList.add('slide-out');
        }

        // Remove animation classes after transition
        setTimeout(() => {
            this.slides.forEach(slide => {
                slide.classList.remove('slide-in', 'slide-out');
            });
            this.isAnimating = false;
        }, 500);
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize carousel when content is dynamically loaded
function initCarousel() {
    const carouselElement = document.querySelector('.testimonials-carousel');
    if (carouselElement) {
        new TestimonialsCarousel();
    }
}

// Initialize on DOMContentLoaded (for initial page load)
document.addEventListener('DOMContentLoaded', initCarousel);

// Re-initialize when dynamic content is loaded
window.addEventListener('contentLoaded', initCarousel); 