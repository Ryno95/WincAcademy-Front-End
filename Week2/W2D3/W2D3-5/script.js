const superheroes = [{
            "name": "Batman",
            "publisher": "DC Comics",
            "alter_ego": "Bruce Wayne",
            "first_appearance": "Detective Comics #27",
            "weight": "210"
        },
        {
            "name": "Superman",
            "publisher": "DC Comics",
            "alter_ego": "Kal-El",
            "first_appearance": "Action Comics #1",
            "weight": "220"
        },
        {
            "name": "Flash",
            "publisher": "DC Comics",
            "alter_ego": "Jay Garrick",
            "first_appearance": "Flash Comics #1",
            "weight": "195"
        },
        {
            "name": "Green Lantern",
            "publisher": "DC Comics",
            "alter_ego": "Alan Scott",
            "first_appearance": "All-American Comics #16",
            "weight": "186"
        },
        {
            "name": "Green Arrow",
            "publisher": "DC Comics",
            "alter_ego": "Oliver Queen",
            "first_appearance": "All-American Comics #16",
            "weight": "195"
        },
        {
            "name": "Wonder Woman",
            "publisher": "DC Comics",
            "alter_ego": "Princess Diana",
            "first_appearance": "The Incredible Hulk #180",
            "weight": "165"
        },
        {
            "name": "Blue Beetle",
            "publisher": "DC Comics",
            "alter_ego": "Dan Garret",
            "first_appearance": "Mystery Men Comics #1",
            "weight": "145"
        },
        {
            "name": "Spider Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Peter Parker",
            "first_appearance": "Amazing Fantasy #15",
            "weight": "167"
        },
        {
            "name": "Captain America",
            "publisher": "Marvel Comics",
            "alter_ego": "Steve Rogers",
            "first_appearance": "Captain America Comics #1",
            "weight": "220"
        },
        {
            "name": "Iron Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Tony Stark",
            "first_appearance": "Tales of Suspense #39",
            "weight": "250"
        },
        {
            "name": "Thor",
            "publisher": "Marvel Comics",
            "alter_ego": "Thor Odinson",
            "first_appearance": "Journey into Myster #83",
            "weight": "200"
        },
        {
            "name": "Hulk",
            "publisher": "Marvel Comics",
            "alter_ego": "Bruce Banner",
            "first_appearance": "The Incredible Hulk #1",
            "weight": "1400"
        },
        {
            "name": "Wolverine",
            "publisher": "Marvel Comics",
            "alter_ego": "James Howlett",
            "first_appearance": "The Incredible Hulk #180",
            "weight": "200"
        },
        {
            "name": "Daredevil",
            "publisher": "Marvel Comics",
            "alter_ego": "Matthew Michael Murdock",
            "first_appearance": "Daredevil #1",
            "weight": "200"
        },
        {
            "name": "Silver Surfer",
            "publisher": "Marvel Comics",
            "alter_ego": "Norrin Radd",
            "first_appearance": "The Fantastic Four #48",
            "weight": "unknown"
        }
    ]
    //1. Make an array of all superhero names
const superHeroNames = superheroes.map(hero => {
    return [hero.name]
});
//2. Make an array of all superheroes < 190
const lightSuperHeroes = superheroes.filter(hero => hero.weight < 190);

//console.log(lightSuperHeroes);

//3. Make an array of the NAMES of all superheroes = 200
const SuperHeroesThatWay = superheroes.filter(hero => hero.weight == 200);
//console.log(heavySuperHeroes)
const heavySuperHeroesNames = SuperHeroesThatWay.map(hero => {
    return [hero.name]

});
//console.log(heavySuperHeroesNames);

//4. Make an array of the first appearance of the superheroes:
const theFirstAppearances = superheroes.map(hero => {
    return [hero.first_appearance]
});
//console.log(theFirstAppearances);

//5. make an array of all dc comics and a seperate array for marvel comics

const dcHeroes = superheroes.filter(function(hero) {
    return hero.publisher === "DC Comics";
});
const marvelHeroes = superheroes.filter(function(hero) {
    return hero.publisher === "Marvel Comics";
});;

//console.log("Mijn DC heroes zijn ", dcHeroes);
//console.log("Mijn Marvel heroes zijn", marvelHeroes)


//6.
const dcHeroesWeight = superheroes.filter(function(hero) {
    return hero.publisher === "DC Comics";
}).map(function(hero) {
    return parseInt(hero.weight);
});
const totalWeightDC = dcHeroesWeight.reduce(function(previous, current) {
    return previous + current
});
//console.log(totalWeightDC)

//7.
const marvelHeroesWeight = superheroes.filter(function(hero) {
    return hero.publisher === "Marvel Comics" && parseInt(hero.weight) > 0;
}).map(function(hero) {
    return parseInt(hero.weight);
});
//console.log(marvelHeroesWeight);
const totalWeightMarvel = marvelHeroesWeight.reduce(function(previous, current) {
    return previous + current;
});
//console.log((totalWeightMarvel))

//8. Search for the heaviest superhero
const HeroWeights = superheroes.map(function(hero) {
    return parseInt(hero.weight);
});
//console.log(HeroWeights)

const heaviestHero = HeroWeights.reduce(function(previous, current) {
    if (current > previous) {
        return current;
    } else {
        return previous;
    }
});
//console.log(heaviestHero);