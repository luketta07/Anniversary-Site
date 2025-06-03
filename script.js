function showHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}

function showLetter() {
    const letter = document.getElementById('loveLetter');
    letter.classList.toggle('show');
}

function showConfetti() {
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 1 + 's';
        confetti.style.background = ['#ff5e62', '#ffd700', '#1db954'][Math.floor(Math.random() * 3)];
        heartsContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function togglePlayPause() {
    const music = document.getElementById('music');
    const button = document.querySelector('.player-controls button');
    if (music.paused) {
        music.play();
        button.textContent = '⏸️';
    } else {
        music.pause();
        button.textContent = '▶️';
    }
}

document.querySelector('.photo').addEventListener('click', showConfetti);

document.getElementById('music').addEventListener('timeupdate', function() {
    const progress = document.querySelector('.progress');
    const percentage = (this.currentTime / this.duration) * 100;
    progress.style.width = percentage + '%';
});