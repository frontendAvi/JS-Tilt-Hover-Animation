
let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('body');

list.forEach(element => {
    element.addEventListener("mouseenter", function(event) {
        // Retrieve computed style to get the value of --clr
        let computedStyle = window.getComputedStyle(event.target);
        let color = computedStyle.getPropertyValue('--clr');
        bg.style.background = color;
        bg.style.transition = 'background-color 0.5s ease-in-out';
    });

    element.addEventListener("mouseleave", function(event) {
        bg.style.background = '#f5f5f5';
        bg.style.transition = 'background-color 0.5s ease-in-out';
    });
});


VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 25,
    speed: 400
});