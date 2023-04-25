buttons = document.querySelectorAll("button");
modal = document.getElementById("modal");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function (a) {
        const classes = a.currentTarget.classList;
        if(classes.contains("show-modal")) {
            modal.classList.add("modal-active");
        } else if(classes.contains("close-modal")) {
            modal.classList.remove("modal-active");
        }
    });
});
