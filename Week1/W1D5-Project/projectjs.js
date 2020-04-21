let toggleNavStatus = false;

let toggleNav = function() {
        let getSidebar = document.querySelector(".nav-sidebar");
        let getSidebarUL = document.querySelector(".nav-sidebar ul");
        let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");


        if (toggleNav == true) {
            getSidebarUL.style.visibility = "hidden";

            toggleNavStatus = false;

        } else if (toggleNav == false); {
            getSidebarUL.style.visibility = "visible";

            toggleNavStatus = true;

        }
    }
    //I was wondering if the visibility can also be toggled like the background blue and red in the previous excercise?
    //const changeClassBlueB = function() {
    //     const bodyElement = document.body;
    //     bodyElement.classList.toggle("purple-background");
    // };
const changeBackGroundColors = function() {
    const bodyElment = document.body;
    bodyElement.classList.add("blue-background");
};

const changeBackroundColorButton = function() {
    const changeBackGroundC = document.getElementById('Tbutton');
    console.log(changeBackGroundColors)
    changeBackGroundC.addEventListener('click', function() {
        changeBackGroundColors();
        alert('This Color Change Button has been clicked'); //te testen of de button het doet
    });
    document.addEventListener('DOMContentLoaded', event => {
        changeBackroundColorButton();
    })
};

//