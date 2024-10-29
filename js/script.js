const words = ["Developer","Freelancer", "Designer", "Photographer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const delay = 130;

function typeAnimation() {
    const textElement = document.getElementById("animatedText");

    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentText = words[i].slice(0, ++j);
            textElement.textContent = currentText;
        }

        if (isDeleting && j > 0) {
            currentText = words[i].slice(0, --j);
            textElement.textContent = currentText;
        }

        if (j === words[i].length) {
            isDeleting = true;
            setTimeout(typeAnimation, 1000); 
            return;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0; 
    }

    setTimeout(typeAnimation, delay);
}

typeAnimation();