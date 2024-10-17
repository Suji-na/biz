document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const viewportWidth = window.innerWidth;

        let offsetPosition;

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            if (viewportWidth > 767) {
                offsetPosition = elementPosition + window.pageYOffset - 80; 
            } else {
                offsetPosition = elementPosition + window.pageYOffset - 50; 
            }

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

