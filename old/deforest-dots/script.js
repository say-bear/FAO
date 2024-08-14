// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dotsContainer = document.getElementById('dots-container');
    const slidingText = document.getElementById('sliding-text');
    const slidingTextContent = document.getElementById('sliding-text-content');
    const closeButton = document.getElementById('close-button');

    // Example dots data with titles and positions
    const dots = [
        { x: 10, y: 20, title: 'Dot 1', content: 'Content for Dot 1' },
        { x: 30, y: 40, title: 'Dot 2', content: 'Content for Dot 2' },
        { x: 50, y: 60, title: 'Dot 3', content: 'Content for Dot 3' }
    ];

    function createDot(xPercent, yPercent, title, content) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${xPercent}%`;
        dot.style.top = `${yPercent}%`;

        const dotTitle = document.createElement('div');
        dotTitle.classList.add('dot-title');
        dotTitle.textContent = title;
        dot.appendChild(dotTitle);

        dot.addEventListener('click', () => {
            slidingTextContent.textContent = content;
            slidingText.classList.add('active');
        });

        return dot;
    }

    // Add dots to the container
    dots.forEach(dotData => {
        const dot = createDot(dotData.x, dotData.y, dotData.title, dotData.content);
        dotsContainer.appendChild(dot);
    });

    // Close the sliding text panel
    closeButton.addEventListener('click', () => {
        slidingText.classList.remove('active');
    });
});
