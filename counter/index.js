buttons = document.querySelectorAll('.btn');
number = document.getElementById('number');
let counter = 0;

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (a) {
        const classes = a.currentTarget.classList;
        if (classes.contains("decrease")) {
            counter--;
        } else if (classes.contains("increase")) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter < 0) {
            number.style.color = "red";
        } else if (counter > 0) {
            number.style.color = "green";
        } else {
            number.style.color = "white";
        }

        number.innerHTML = counter;
    })
});