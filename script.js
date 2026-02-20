document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal, index) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                // Cascading delay based on index
                setTimeout(() => {
                    reveal.classList.add('active');
                }, index * 80); 
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});