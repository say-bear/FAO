document.addEventListener('DOMContentLoaded', () => {
    const transitionCircle = document.getElementById('transition-circle');

    // Delay the shrinking animation slightly to ensure the page content is visible
    setTimeout(() => {
        transitionCircle.classList.add('shrink');
    }, 100); // Adjust the delay as needed
});