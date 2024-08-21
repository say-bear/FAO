document.addEventListener('DOMContentLoaded', () => {
    const transitionCircle = document.getElementById('transition-circle');

    // Delay the shrinking animation slightly to ensure the page content is visible
    setTimeout(() => {
        transitionCircle.classList.add('shrink');
    }, 100); // Adjust the delay as needed
});

document.addEventListener('DOMContentLoaded', () => {
    const sideMenuLinks = document.querySelectorAll('.side-menu .icon-circle-container');
    const middleContent = document.querySelector('.middle-tree');
    const rightContent = document.querySelector('.right-content');
    const backButton = document.querySelector('.back-button');

    sideMenuLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            const customLink = link.querySelector('.icon-circle').getAttribute('data-link'); // Custom link from the data-link attribute

            // Remove any existing slide-in class to ensure the animation works every time
            rightContent.classList.remove('slide-in');

            // Add the slide-out animation
            rightContent.classList.add('slide-out');

            // After the slide-out transition, load the new content
            setTimeout(() => {
                fetch(customLink)
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const newDocument = parser.parseFromString(data, 'text/html');

                        // Replace the middle and right content
                        middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
                        rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

                        // Re-apply the slide-in animation
                        setTimeout(() => {
                            rightContent.classList.remove('slide-out');
                            rightContent.classList.add('slide-in');
                        }, 10); // Slight delay to ensure the class change is processed

                        // Update the URL without reloading the page
                        history.pushState(null, null, customLink);
                    });
            }, 300); // Match this duration with the CSS transition time
        });
    });
});

// Ensure that if the circle animation runs initially, it shrinks immediately
document.addEventListener('DOMContentLoaded', () => {
    const transitionCircle = document.getElementById('transition-circle');

    if (transitionCircle) {
        setTimeout(() => {
            transitionCircle.classList.add('shrink');
        }, 100); // Adjust the delay as needed
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sideMenuLinks = document.querySelectorAll('.side-menu .icon-circle-container');
    const middleContent = document.querySelector('.middle-tree');
    const rightContent = document.querySelector('.right-content');
    const backButton = document.querySelector('.back-button');
    const transitionCircle = document.getElementById('transition-circle');

    sideMenuLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            if (link.contains(backButton)) {
                // If the back button is clicked, trigger the transition circle
                transitionCircle.classList.remove('shrink');
                transitionCircle.classList.add('expand');

                setTimeout(() => {
                    // Navigate to the main page with a query parameter to trigger the shrinking animation
                    window.location.href = 'index.html?transition=shrink';
                }, 800); // Adjust the timing to match your animation
            } else {
                const customLink = link.querySelector('.icon-circle').getAttribute('data-link');

                // Remove any existing slide-in class to ensure the animation works every time
                rightContent.classList.remove('slide-in');

                // Add the slide-out animation
                rightContent.classList.add('slide-out');

                // After the slide-out transition, load the new content
                setTimeout(() => {
                    fetch(customLink)
                        .then(response => response.text())
                        .then(data => {
                            const parser = new DOMParser();
                            const newDocument = parser.parseFromString(data, 'text/html');

                            // Replace the middle and right content
                            middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
                            rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

                            // Re-apply the slide-in animation
                            setTimeout(() => {
                                rightContent.classList.remove('slide-out');
                                rightContent.classList.add('slide-in');
                            }, 10); // Slight delay to ensure the class change is processed

                            // Update the URL without reloading the page
                            history.pushState(null, null, customLink);
                        });
                }, 300); // Match this duration with the CSS transition time
            }
        });
    });

    // Ensure that if the circle animation runs initially, it shrinks immediately
    if (transitionCircle) {
        setTimeout(() => {
            transitionCircle.classList.add('shrink');
        }, 100); // Adjust the delay as needed
    }
});

// Listen for the popstate event to handle browser navigation
window.addEventListener('popstate', () => {
    const currentUrl = window.location.href;
    
    fetch(currentUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const newDocument = parser.parseFromString(data, 'text/html');
            
            const middleContent = document.querySelector('.middle-tree');
            const rightContent = document.querySelector('.right-content');
            
            // Replace the middle and right content
            middleContent.innerHTML = newDocument.querySelector('.middle-tree').innerHTML;
            rightContent.innerHTML = newDocument.querySelector('.right-content').innerHTML;

            // Re-apply the slide-in animation
            setTimeout(() => {
                rightContent.classList.add('slide-in');
            }, 10); // Slight delay to ensure the class change is processed
        });
});
