document.addEventListener('DOMContentLoaded', () => {
    // Helper function to load animations directly from public URLs
    const loadLottie = (containerId, animationUrl) => {
        return lottie.loadAnimation({
            container: document.getElementById(containerId),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animationUrl
        });
    };

    // Public Lottie JSON URLs (replace these URLs with any specific Lottie URL you like)
    loadLottie('lottie-1', 'https://assets5.lottiefiles.com/packages/lf20_j1adxtYb.json'); // Pleading emoji/character
    loadLottie('lottie-2', 'https://assets5.lottiefiles.com/packages/lf20_k239cvyc.json'); // Sad character
    loadLottie('lottie-3', 'https://assets5.lottiefiles.com/packages/lf20_1id2ylms.json'); // Crying character
    loadLottie('lottie-4', 'https://assets5.lottiefiles.com/packages/lf20_1id2ylms.json'); // Crying character
    loadLottie('lottie-yes', 'https://assets5.lottiefiles.com/packages/lf20_xl3ak324.json'); // Happy/Love character

    // Runaway "No" Button behavior
    const runawayBtn = document.getElementById('runaway-btn');
    if (runawayBtn) {
        const moveButton = () => {
            const maxX = window.innerWidth - runawayBtn.offsetWidth - 40;
            const maxY = window.innerHeight - runawayBtn.offsetHeight - 40;
            
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            runawayBtn.style.position = 'fixed';
            runawayBtn.style.left = `${randomX}px`;
            runawayBtn.style.top = `${randomY}px`;
        };

        runawayBtn.addEventListener('mouseover', moveButton);
        runawayBtn.addEventListener('touchstart', moveButton);
    }
});

function nextScreen(screenId) {
    document.querySelectorAll('.proposal-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showScreen(screenId) {
    nextScreen(screenId);
}
