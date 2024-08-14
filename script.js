document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    const backButton = document.querySelector('.back-button');
    const leftPart = document.querySelector('.left-part');
    const iconContainers = document.querySelectorAll('.icon-circle-container');
    const iconCircles = document.querySelectorAll('.icon-circle');
    const iconImages = document.querySelectorAll('.icon-circle img');

    iconCircles.forEach(circle => {
        circle.classList.add('no-hover');
    });

    startButton.addEventListener('click', () => {
        backButton.style.display = 'inline-block';
        iconCircles.forEach(circle => {
            circle.classList.remove('no-hover');
        });
        leftPart.classList.add('hidden');
        iconContainers.forEach(container => container.classList.add('show-text'));

        iconImages.forEach((img, index) => {
            img.classList.add('fade-out');
            setTimeout(() => {
                img.src = `images/icons/icon${index + 1}.svg`;
                img.classList.remove('fade-out');
                img.classList.add('fade-in');
            }, 300); // Delay to match the scale-up transition
        });
    });

    backButton.addEventListener('click', () => {
        backButton.style.display = 'none';
        iconCircles.forEach(circle => {
            circle.classList.add('no-hover');
        });
        leftPart.classList.remove('hidden');
        iconContainers.forEach(container => container.classList.remove('show-text'));

        iconImages.forEach(img => {
            img.classList.add('fade-in');
            setTimeout(() => {
                img.src = 'images/icons/icon0.svg'; // Reset to original icon
                img.classList.remove('fade-in');
            }, 300); // Delay to match the fade-out transition
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const iconCircles = document.querySelectorAll('.icon-circle');
    const transitionCircle = document.getElementById('transition-circle');

    iconCircles.forEach((circle) => {
        circle.addEventListener('click', () => {
            // Get the custom link associated with the clicked circle
            const customLink = circle.getAttribute('data-link');

            // Start expanding the circle
            transitionCircle.classList.add('expand');

            // After the circle has fully expanded, load the new content
            setTimeout(() => {
                window.location.href = customLink;
            }, 800); // Match the transition duration

            // After the new page is loaded, shrink the circle
            transitionCircle.addEventListener('transitionend', () => {
                if (window.location.href.includes(customLink)) {
                    transitionCircle.classList.add('shrink');
                }
            });
        });
    });
});
