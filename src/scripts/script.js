const backgroundButton = document.getElementById("backgroundButton");
backgroundButton.addEventListener("click", startGame);

const backgroundCounting = document.getElementById("backgroundCounting");

const backgroundInput = document.getElementById("backgroundInput");

function startGame() {
    backgroundInput.removeAttribute("type", "hidden");

    backgroundInput.setAttribute("type", "text");

    backgroundCounting.style.display = "block";

    changeBackground();
}

let colors = ["yellow", "orange", "red", "green", "purple", "blue"];

let selected = colors[Math.floor(Math.random() * colors.length)];

const backgroundContainer = document.getElementById("backgroundContainer");

function changeBackground() {
    backgroundContainer.style.backgroundColor = selected;

    restartGame(backgroundInput.value);
}

function restartGame(value) {
    if (value === selected) {
        backgroundCounting.textContent =
            Number(backgroundCounting.textContent) + 1;

        selected = colors[Math.floor(Math.random() * colors.length)];

        backgroundContainer.style.backgroundColor = selected;
    } else if (value === !selected) {
        backgroundContainer.style.backgroundColor = "black";
    }
}
