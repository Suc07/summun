var botonMenu = document.querySelector(".menu-toggle");
var menu = document.querySelector(".main-nav");

botonMenu.addEventListener("click", function() {

    if (menu.classList.contains("open")) {

        menu.classList.remove("open");

    } else {

        menu.classList.add("open");

    }

});


var enlaces = document.querySelectorAll(".main-nav a");

for (var i = 0; i < enlaces.length; i++) {

    enlaces[i].addEventListener("click", function() {

        menu.classList.remove("open");

    });

}


var año = new Date().getFullYear();

document.getElementById("year").textContent = año;