colors = ["darkblue", "cyan", "red", "blue", "green", "purple", "yellow", "orange", "black", "pink"];

button = document.getElementById("btn");
bg = document.querySelector(".main");
color = document.getElementById("color");

function getRandom() {
    return Math.random();
}

button.addEventListener("click", function () {
    random = Math.floor(getRandom() * colors.length);

    bg.style.backgroundColor = colors[random];
    color.innerHTML = colors[random];
    console.log(`${colors[random]}`);
})