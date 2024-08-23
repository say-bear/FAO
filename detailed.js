// Circle animation

document.addEventListener('DOMContentLoaded', () => {
    const transitionCircle = document.getElementById('transition-circle');

    // Delay the shrinking animation slightly to ensure the page content is visible
    setTimeout(() => {
        transitionCircle.classList.add('shrink');
    }, 100); // Adjust the delay as needed
});


// 3 buttons


document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    setupSideMenuNavigation();
    setupPopstateListener();
});

function initializeAnimations() {
    const treeImage = document.getElementById('tree-image');
    const buttonUp = document.getElementById('button-up');
    const buttonDown = document.getElementById('button-down');
    const backButton = document.getElementById('back-to-tree');

    if (buttonUp) {
        buttonUp.addEventListener('click', () => {
            animateTreeImage(treeImage, 'images/branch.png', 100, -100, buttonUp, buttonDown, backButton);
        });
    }

    if (buttonDown) {
        buttonDown.addEventListener('click', () => {
            animateTreeImage(treeImage, 'images/root.png', -100, 100, buttonUp, buttonDown, backButton);
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            animateTreeImage(treeImage, 'images/bgtree.png', 0, 0, buttonUp, buttonDown, backButton, true);
        });
    }
}

// Helper function to animate tree image transitions
function animateTreeImage(treeImage, newSrc, startY, endY, buttonUp, buttonDown, backButton, reset = false) {
    treeImage.style.transform = `translateY(${startY}px)`;
    treeImage.style.opacity = '0';

    setTimeout(() => {
        treeImage.src = newSrc;
        treeImage.style.transform = `translateY(${endY}px)`;
        treeImage.style.opacity = '1';

        if (reset) {
            buttonUp.style.visibility = 'visible';
            buttonDown.style.visibility = 'visible';
            backButton.style.display = 'none';
        } else {
            buttonUp.style.visibility = 'hidden';
            buttonDown.style.visibility = 'hidden';
            backButton.style.display = 'flex';
        }
    }, 800);
}



// Setup side menu navigation with content updates
function setupSideMenuNavigation() {
    const sideMenuLinks = document.querySelectorAll('.side-menu .icon-circle-container');
    const middleContent = document.querySelector('.middle-tree');
    const rightContent = document.querySelector('.right-content');
    const buttonContainer = document.querySelector('.buttons-container');

    sideMenuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const customLink = link.querySelector('.icon-circle').getAttribute('data-link');

            setTimeout(() => {
                fetch(customLink)
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const newDocument = parser.parseFromString(data, 'text/html');

                        middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
                        rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

                        buttonContainer.style.display = 'flex';
                        resetButtonsAndImage();
                        initializeAnimations();  // Reinitialize animations after content update
                    });
            }, 500);
        });
    });
}


// Reset buttons and tree image to the initial state
function resetButtonsAndImage() {
    const buttonUp = document.getElementById('button-up');
    const buttonDown = document.getElementById('button-down');
    const backButton = document.getElementById('back-to-tree');
    const treeImage = document.getElementById('tree-image');

    buttonUp.style.visibility = 'visible';
    buttonDown.style.visibility = 'visible';
    backButton.style.display = 'none';

    treeImage.style.opacity = '0';
    setTimeout(() => {
        treeImage.src = 'images/bgtree.png';
        treeImage.style.transform = '';
        treeImage.style.opacity = '1';
    }, 800);
}


// Setup popstate listener to handle browser navigation
function setupPopstateListener() {
    window.addEventListener('popstate', () => {
        const currentUrl = window.location.href;

        fetch(currentUrl)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const newDocument = parser.parseFromString(data, 'text/html');

                const middleContent = document.querySelector('.middle-tree');
                const rightContent = document.querySelector('.right-content');

                setTimeout(() => {
                    middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
                    rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

                    resetButtonsAndImage();
                    initializeAnimations();  // Reinitialize animations after content update
                }, 500);
            });
    });
}


