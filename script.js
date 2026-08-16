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
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

// Evasive "No" Button behavior across desktop & mobile
document.addEventListener('DOMContentLoaded', () => {
    const runawayBtn = document.getElementById('move-random');

    if (runawayBtn) {
        const moveButton = (e) => {
            if (e) e.preventDefault();

            // Calculate boundary limits considering padding
            const padding = 20;
            const maxX = window.innerWidth - runawayBtn.offsetWidth - padding;
            const maxY = window.innerHeight - runawayBtn.offsetHeight - padding;

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
