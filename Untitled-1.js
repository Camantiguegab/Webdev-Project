<script>
    document.addEventListener('DOMContentLoaded', () => {
        // 1. SMOOTH SCROLLING FOR NAV LINKS
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for sticky nav
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 2. SCROLL REVEAL ANIMATION
        // Elements hide initially and slide up as you scroll into view
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // Apply starting styles and observe cards
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(40px)";
            card.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
            revealOnScroll.observe(card);
        });

        // 3. STICKY NAV GLOW EFFECT
        const navbar = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = "rgba(0, 0, 0, 0.98)";
                navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
                navbar.style.padding = "10px 0";
            } else {
                navbar.style.background = "rgba(10, 10, 10, 0.95)";
                navbar.style.boxShadow = "none";
                navbar.style.padding = "15px 0";
            }
        });

        // 4. PARALLAX EFFECT ON HERO IMAGE
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrollValue = window.scrollY;
            header.style.backgroundPositionY = `${scrollValue * 0.5}px`;
        });
    });
</script>

