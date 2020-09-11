const createHeart = () => {
    const heart = document.createElement('div');

    heart.classList.add('heart')
    heart.style.left = Math.random() * 100 + 'vw';
    heart.animationDuration = Math.random() * 2 + 5 + 's'
    heart.innerHTML = '❤️';

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000)
}

setInterval(createHeart, 500)
