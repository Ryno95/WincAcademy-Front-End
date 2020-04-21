const changeClassBackground = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("blue-background");
};

const changeBackgroundColorBlue = function() {
    const changeBackGroundC = document.getElementById("Tbutton");
    changeBackGroundC.addEventListener('click', function() {
        changeClassBackground();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};

const changeClassBackgroundV = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("purple-background");
};

const changeBackgroundColorViolet = function() {
    const changeBackGroundV = document.getElementById("Vbutton");
    changeBackGroundV.addEventListener('click', function() {
        changeClassBackgroundV();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};

const changeClassBackgroundO = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("orange-background");
};

const changeBackgroundColorOrange = function() {
    const changeBackGroundO = document.getElementById("Obutton");
    changeBackGroundO.addEventListener('click', function() {
        changeClassBackgroundO();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};

const changeClassBackgroundG = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("green-background");
};

const changeBackgroundColorGreen = function() {
    const changeBackGroundG = document.getElementById("Gbutton");
    changeBackGroundG.addEventListener('click', function() {
        changeClassBackgroundG();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};

const changeClassBackgroundR = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const changeBackgroundColorRed = function() {
    const changeBackGroundR = document.getElementById("Rbutton");
    changeBackGroundR.addEventListener('click', function() {
        changeClassBackgroundR();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};


const changeClassBackgroundH = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("home-background");
};

const changeBackgroundColorHome = function() {
    const changeBackGroundH = document.getElementById("Hbutton");
    changeBackGroundH.addEventListener('click', function() {
        changeClassBackgroundH();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};

document.addEventListener('DOMContentLoaded', event => {
    changeBackgroundColorBlue();
    changeBackgroundColorViolet();
    changeBackgroundColorOrange();
    changeBackgroundColorGreen();
    changeBackgroundColorRed();
    changeBackgroundColorHome();

});