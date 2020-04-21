const myMovie = {
    title: "Wanted",
    duration: 140,
    stars: ["Angelina", "Brad", "Charlize", "Tsepo"],
    IMDB: function() {
        console.log(myMovie.title + " last for " + myMovie.duration + " minutes. Staring: " + myMovie.stars);
    }
}
myMovie.IMDB();