document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lottie Animations
    loadLottie('lottie-1', 'animations/pleading_face.json');
    loadLottie('lottie-2', 'animations/sad_duck.json');
    loadLottie('lottie-3', 'animations/crying_duck.json');
    loadLottie('lottie-4', 'animations/crying_eater.json');
    loadLottie('lottie-yes', 'animations/jumping_together.json');
});

function loadLottie(containerId, path) {
    lottie.loadAnimation({
        container: document.getElementById(containerId),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    });
}

function nextStage(stageNumber) {
    document.querySelectorAll('.proposal-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(`proposal-${stageNumber}`).classList.add('active');
}

function showProposal(type) {
    if (type === 'yes') {
        document.querySelectorAll('.proposal-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById('proposal-yes').classList.add('active');
        
        // Trigger celebratory confetti burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// Moves the 'No' button randomly across the screen on Stage 4
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 40);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 40);
    
    button.style.position = 'fixed';
    button.style.left = `${Math.max(20, x)}px`;
    button.style.top = `${Math.max(20, y)}px`;
}

