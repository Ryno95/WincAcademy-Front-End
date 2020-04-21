const age = 24;

if (age > 18) {
    console.log("Welkom wijse ouwe!");
} else {
    console.log("Haha Jochie");
};

const isFemale = false;

if (isFemale) {
    console.log("Whoop Whoop Ladies Night! Gratis Entree");
} else {
    console.log("Ben je een kerel? Betalen natuurlijk!");
};

const driverStatus = 'apple';

if (driverStatus == 'bob') {
    console.log("Gewoon lekker na huis rijden");
} else {
    console.log("Jeroen, niet doen!");
};

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Nothing to see here");
}

let name = "Sarah";

if (name == "Sarah" || name == "Bram") {
    console.log("Jij hebt muzzle want jij heet Sarah/Bram, hier een biertje!!!")
} else {
    console.log("Jij hebt een moderne naam, dat is beloning genoeg!");
}

let totalAmount = 55;

if (totalAmount >= 100) {
    console.log("Hey big spender, hier, een flesje champgne van ons");
} else if (totalAmount >= 50) {
    console.log("Hey gap, voor jouw, een hap");
} else if (totalAmount >= 25) {
    console.log("You get a bitterbal! You get a bitterbal! EVRYBODY GETS A BITTERBAL!");
} else {
    console.log("Bedankt voor uw aankoop!");
}