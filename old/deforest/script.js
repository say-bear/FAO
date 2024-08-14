document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const info = document.getElementById("title");
    const textBlocks = document.querySelectorAll(".text-block");
    const leftContainer = document.querySelector(".left");
    let defaultTitle = "Deforestation";
    let defaultTexts = [];

    textBlocks.forEach(block => {
        defaultTexts.push(block.innerHTML);
    });

    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            const title = section.getAttribute("data-title");

            /* edit hovered text style*/

            const texts = [
                `<span style='
                    font-size: 18px;
                    text-transform: uppercase; 
                    color: red;'
                    >${section.getAttribute("data-text1")}</span>`,
                `<span style='
                    font-size: 18px;
                    color: blue;
                    '>${section.getAttribute("data-text2")}</span>`,
                `<span style='
                    font-size: 18px;
                    color: green;
                    '>${section.getAttribute("data-text3")}</span>`,
                `<span style='
                    font-size: 18px; 
                    color: orange;
                    '>${section.getAttribute("data-text4")}</span>`,
                `<span style='
                    font-size: 24px;
                    font-family: impact;
                    color: purple;
                    '>${section.getAttribute("data-text5")}</span>`
            ];
            const index = parseInt(section.dataset.index);
            const image = section.getAttribute("data-image");
            leftContainer.style.backgroundImage = `url('image/${image}')`;
            info.textContent = title;
            textBlocks.forEach((block, i) => {
                block.innerHTML = texts[i];
            });
        });
    });

    /* reset on mouse leave */

    leftContainer.addEventListener("mouseleave", function() {
        leftContainer.style.backgroundImage = "";
        info.textContent = defaultTitle;
        textBlocks.forEach((block, i) => {
            block.innerHTML = defaultTexts[i];
        });
    });
});

