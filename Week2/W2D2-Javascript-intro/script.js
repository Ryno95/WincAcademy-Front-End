<
button id = "btn"
type = "button" > Get the car 's brand</button>

const car = {
    brand: "Nissan",
    getBrand: function() {
        console.log(this.brand);
    }
};

const el = document.getElementById("btn");
el.addEventListener("click", car.getBrand);