const cards = document.querySelectorAll('.card',);

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8; // Trigger reveal when the card is 80% visible

    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Initial check when the page loads
checkScroll();

// Check for scroll events
window.addEventListener('scroll', checkScroll);
