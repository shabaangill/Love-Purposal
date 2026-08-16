function nextStage(stageNumber) {
    document.querySelectorAll('.proposal-screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const targetStage = document.getElementById(`proposal-${stageNumber}`);
    if (targetStage) {
        targetStage.classList.add('active');
    }
}

function showProposal(response) {
    if (response === 'yes') {
        document.querySelectorAll('.proposal-screen').forEach(screen => {
            screen.classList.remove('active');
        });

        const successStage = document.getElementById('proposal-yes');
        if (successStage) {
            successStage.classList.add('active');
            triggerConfetti();
        }
    }
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

// Fixed boundary calculations for mobile and desktop screens
document.addEventListener('DOMContentLoaded', () => {
    const runawayBtn = document.getElementById('move-random');

    if (runawayBtn) {
        const moveButton = (e) => {
            if (e) e.preventDefault();

            const padding = 20;
            const btnWidth = runawayBtn.offsetWidth || 100;
            const btnHeight = runawayBtn.offsetHeight || 45;

            const maxX = window.innerWidth - btnWidth - padding;
            const maxY = window.innerHeight - btnHeight - padding;

            const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
            const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

            runawayBtn.style.position = 'fixed';
            runawayBtn.style.left = `${randomX}px`;
            runawayBtn.style.top = `${randomY}px`;
        };

        runawayBtn.addEventListener('mouseover', moveButton);
        runawayBtn.addEventListener('touchstart', moveButton, { passive: false });
        runawayBtn.addEventListener('click', moveButton);
    }
});
