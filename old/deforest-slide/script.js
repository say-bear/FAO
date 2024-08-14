document.addEventListener('DOMContentLoaded', () => {
    const dotsContainer = document.getElementById('dots-container');
    const slidingText = document.getElementById('sliding-text');
    const closeButton = document.getElementById('close-button');

    // Example dots data
    const dots = [
        { left: '20%', top: '30%', title: 'Dot 1' },
        { left: '50%', top: '60%', title: 'Dot 2' },
        // Add more dots here
    ];

    dots.forEach(dot => {
        const dotElement = document.createElement('div');
        dotElement.className = 'dot';
        dotElement.style.left = dot.left;
        dotElement.style.top = dot.top;
        dotElement.title = dot.title;

        dotElement.addEventListener('click', () => {
            document.getElementById('sliding-text-content').textContent = dot.title;
            slidingText.classList.add('open');
        });

        dotsContainer.appendChild(dotElement);
    });

    closeButton.addEventListener('click', () => {
        slidingText.classList.remove('open');
    });
});
