document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});

function initializePage() {
    initializeCircleAnimation();
    initializeAnimations();
    setupSideMenuNavigation();
    setupPopstateListener();
    setupLogoClickFade();
}



// Circle animation
function initializeCircleAnimation() {
    const transitionCircle = document.getElementById('transition-circle');
    if (transitionCircle) {
        setTimeout(() => {
            transitionCircle.classList.add('shrink');
        }, 100); // Adjust the delay as needed
    }
}


function setupLogoClickFade() {
    const logoImage = document.getElementById('logo-image');
    if (logoImage) {
        logoImage.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const pageContent = document.getElementById('page-content');
            pageContent.classList.add('fade-out');

            // Wait for the fade-out transition to complete before navigating
            setTimeout(() => {
                window.location.href = logoImage.parentElement.href;
            }, 500); // Match this duration with the CSS transition duration
        });
    }
}


// 3 buttons

// Initialize tree animations and buttons
function initializeAnimations() {
    const treeImage = document.getElementById('tree-image');
    const buttonUp = document.getElementById('button-up');
    const buttonDown = document.getElementById('button-down');
    const backButton = document.getElementById('back-to-tree');
    const dotsContainer = document.getElementById('dots-container');

    if (buttonUp) {
        buttonUp.addEventListener('click', () => {
            animateTreeImage(treeImage, 'images/branch.png', 100, 0, buttonUp, buttonDown, backButton);
            dotsContainer.style.display = 'block'; // Show dots-container
            setupDotsForBranch();
        });
    }

    if (buttonDown) {
        buttonDown.addEventListener('click', () => {
            animateTreeImage(treeImage, 'images/root.png', -100, 0, buttonUp, buttonDown, backButton);
            dotsContainer.style.display = 'block'; // Show dots-container
            setupDotsForRoot();
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            animateTreeImage(treeImage, 'images/bgtree.png', 0, 0, buttonUp, buttonDown, backButton, true);
            dotsContainer.style.display = 'none'; // Hide dots-container
            resetDotsAndContent();
        });
    }
}

// Dots

// Define Dot Configurations for Each Page

const dotConfigurations = {
    "strengthening-land-use-governance.html": {
        branch: [
            { left: '20%', top: '30%', contentId: 'dot11-content' },
            { left: '40%', top: '60%', contentId: 'dot12-content' },
            { left: '60%', top: '20%', contentId: 'dot13-content' },
            { left: '80%', top: '50%', contentId: 'dot14-content' },
        ],
        root: [
            { left: '15%', top: '25%', contentId: 'dot21-content' },
            { left: '30%', top: '45%', contentId: 'dot22-content' },
            { left: '45%', top: '65%', contentId: 'dot23-content' },
            { left: '60%', top: '35%', contentId: 'dot24-content' },
            { left: '75%', top: '55%', contentId: 'dot25-content' },
            { left: '50%', top: '75%', contentId: 'dot26-content' },
            { left: '35%', top: '15%', contentId: 'dot27-content' },
            { left: '45%', top: '15%', contentId: 'dot28-content' },
            { left: '60%', top: '15%', contentId: 'dot29-content' },
        ],
    },
    "promoting-sustainable-agricultural-production-models.html": {
        branch: [
            { left: '25%', top: '40%', contentId: 'dot11-content' },
            { left: '45%', top: '70%', contentId: 'dot12-content' },
            { left: '65%', top: '30%', contentId: 'dot13-content' },
            { left: '85%', top: '60%', contentId: 'dot14-content' },
        ],
        root: [
            { left: '20%', top: '50%', contentId: 'dot21-content' },
            { left: '50%', top: '70%', contentId: 'dot22-content' },
            { left: '80%', top: '30%', contentId: 'dot23-content' },
        ],
    },
    "increasing-consumption.html": {
        branch: [
            { left: '20%', top: '30%', contentId: 'dot11-content' },
            { left: '40%', top: '60%', contentId: 'dot12-content' },
            { left: '60%', top: '20%', contentId: 'dot13-content' },
            { left: '20%', top: '50%', contentId: 'dot14-content' },
            { left: '40%', top: '50%', contentId: 'dot15-content' },
        ],
        root: [
            { left: '15%', top: '25%', contentId: 'dot21-content' },
            { left: '30%', top: '45%', contentId: 'dot22-content' },
            { left: '45%', top: '65%', contentId: 'dot23-content' },
            { left: '60%', top: '35%', contentId: 'dot24-content' },
            { left: '75%', top: '55%', contentId: 'dot25-content' },
            { left: '50%', top: '50%', contentId: 'dot26-content' },
            { left: '70%', top: '50%', contentId: 'dot27-content' },
        ],
    },
    "creating-incentives.html": {
        branch: [
            { left: '20%', top: '30%', contentId: 'dot11-content' },
            { left: '40%', top: '60%', contentId: 'dot12-content' },
            { left: '60%', top: '20%', contentId: 'dot13-content' },
            { left: '20%', top: '50%', contentId: 'dot14-content' },
            { left: '40%', top: '50%', contentId: 'dot15-content' },
        ],
        root: [
            { left: '15%', top: '25%', contentId: 'dot21-content' },
            { left: '30%', top: '45%', contentId: 'dot22-content' },
            { left: '45%', top: '65%', contentId: 'dot23-content' },
            { left: '60%', top: '35%', contentId: 'dot24-content' },
            { left: '75%', top: '55%', contentId: 'dot25-content' },
        ],
    },
    "enhancing-robust-information-systems.html": {
        branch: [
            { left: '20%', top: '30%', contentId: 'dot11-content' },
            { left: '40%', top: '60%', contentId: 'dot12-content' },
            { left: '60%', top: '20%', contentId: 'dot13-content' },
            { left: '20%', top: '50%', contentId: 'dot14-content' },
            { left: '40%', top: '50%', contentId: 'dot15-content' },
        ],
        root: [
            { left: '15%', top: '25%', contentId: 'dot21-content' },
            { left: '30%', top: '45%', contentId: 'dot22-content' },
            { left: '45%', top: '65%', contentId: 'dot23-content' },
            { left: '60%', top: '35%', contentId: 'dot24-content' },
            { left: '75%', top: '55%', contentId: 'dot25-content' },
        ],
    },
    "improving-livelihoods.html": {
        branch: [
            { left: '20%', top: '30%', contentId: 'dot11-content' },
            { left: '40%', top: '60%', contentId: 'dot12-content' },
            { left: '60%', top: '20%', contentId: 'dot13-content' },
        ],
        root: [
            { left: '15%', top: '25%', contentId: 'dot21-content' },
            { left: '30%', top: '45%', contentId: 'dot22-content' },
            { left: '45%', top: '65%', contentId: 'dot23-content' },
            { left: '60%', top: '35%', contentId: 'dot24-content' },
            { left: '75%', top: '55%', contentId: 'dot25-content' },
        ],
    },
};

// Detect the Current Page

function getCurrentPage() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1); // Extracts the page name from the URL
}


// Configuration Based on the Current Page

function setupDotsForBranch() {
    const currentPage = getCurrentPage();
    const branchDots = dotConfigurations[currentPage]?.branch || defaultDotConfig.branch;

    setTimeout(() => {
        setupDots(branchDots);
    }, 800);
}

function setupDotsForRoot() {
    const currentPage = getCurrentPage();
    const rootDots = dotConfigurations[currentPage]?.root || defaultDotConfig.root;

    setTimeout(() => {
        setupDots(rootDots);
    }, 800);
}


// Handle Dynamic Content


function setupDots(dotsData) {
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = '';

    dotsData.forEach(dot => {
        const dotElement = document.createElement('div');
        dotElement.className = 'dot';
        dotElement.style.left = dot.left;
        dotElement.style.top = dot.top;

        dotElement.addEventListener('click', () => {
            switchContent(dot.contentId);
        });

        dotsContainer.appendChild(dotElement);
    });
}



// Content changes

function switchContent(contentId) {
    // Get all visible content
    const visibleContent = document.querySelectorAll('.card-content:not(.hidden)');

    visibleContent.forEach(content => {
        // Fade out all visible content
        content.classList.add('hidden');

        // Hide the content after the fade-out transition
        setTimeout(() => {
            content.style.display = 'none';
        }, 500); // Match this duration with the CSS transition duration
    });

    // After all content is hidden, show the new content
    setTimeout(() => {
        const newContent = document.getElementById(contentId);
        if (newContent) {
            newContent.style.display = 'block';
            setTimeout(() => {
                newContent.classList.remove('hidden');
            }, 50); // Slight delay to ensure the display property is set before removing 'hidden'
        }
    }, 500); // Wait for the fade-out before showing new content
}

function resetDotsAndContent() {
    console.log("Resetting dots and content");
    // Hide all dot-related content
    document.querySelectorAll('.card-content').forEach(content => {
        content.style.display = 'none';
        content.classList.add('hidden');
    });

    // Clear dots
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = '';

    // Show the default content and remove the 'hidden' class to fade it in
    const defaultContent = document.getElementById('default-content');
    if (defaultContent) {
        defaultContent.style.display = 'block';
        setTimeout(() => {
            defaultContent.classList.remove('hidden');
        }, 50);
    }
}

function resetButtonsAndImage() {
    console.log("Resetting buttons and tree image");
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

        // Re-initialize dots here after the image reset
        setupDotsForBranch(); // or setupDotsForRoot() depending on your logic
    }, 800);
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
    const cardHeader = document.querySelector('.card-header');
    const cardContent = document.querySelector('.card-content');

    sideMenuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const customLink = link.querySelector('.icon-circle').getAttribute('data-link');

            // Update the browser URL without reloading the page
            history.pushState(null, '', customLink);
            
            // Fade out the card-header and card-content
            cardHeader.classList.add('hidden');
            cardContent.classList.add('hidden');

            setTimeout(() => {
                fetch(customLink)
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const newDocument = parser.parseFromString(data, 'text/html');

                        // Replace content
                        middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
                        rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

                        // Show and reset buttons
                        buttonContainer.style.display = 'flex';
                        resetButtonsAndImage();
                        initializeAnimations();
                        setupPopstateListener();

                        // Update the card-header and card-content and fade them in
                        const newCardHeader = newDocument.querySelector('.card-header').innerHTML;
                        const newCardContent = newDocument.querySelector('.card-content').innerHTML;
                        cardHeader.innerHTML = newCardHeader;
                        cardContent.innerHTML = newCardContent;
                        
                        setTimeout(() => {
                            cardHeader.classList.remove('hidden');
                            cardContent.classList.remove('hidden');
                        }, 50);
                    });
            }, 500); // Adjust this duration to match your CSS transition duration
        });
    });
}


// Handle browser back/forward navigation...
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

                middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
                rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

                resetButtonsAndImage();
                initializeAnimations();
                setupDotsForBranch();
                setupSideMenuNavigation();
            });
    });
}