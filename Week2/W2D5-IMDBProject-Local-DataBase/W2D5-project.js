// Make a website that gives a summary of different films:
// 1.The user wants to see a list of different movies with a poster. (ul => li with pictures and links)
// 2. On the top of the page the user wants five RADIO buttons to filter(only one filter at a time) the films
//    Buttons, remember to check click functionality and CHECK EVENT LISTENERS!
// 3. Use ARRAY MEHTODS for the FILTERS. check if there strings contain hte same info as other strings. 
//    The last four filters are very similar, maybe they can be combined
//     - Categorie 1: Als gebruiker wil ik kunnen filteren op de categorie **nieuwste films**:
//       van de laatste jaren, dat betekent 2014 of nieuwer.
//     - Categorie 2: Als gebruiker wil ik kunnen filters op films met **"Avengers"** in de titel.
//     - Categorie 3: Als gebruiker wil ik kunnen filteren op films met **"X-Men"** in de titel.
//     - Categorie 4: Als gebruiker wil ik kunnen filteren op films met **"Princess"** in de titel.
//     -Categorie 5: Als gebruiker wil ik kunnen filteren op films met "Batman" in de titel. 
// 4. The user also wants to be able to click on a poster that takes him/her to the imdb page of the film


//Function to add the films to the ,html file 
document.getElementById("totalmoviedatabase")
let addMoviesToDom = function(selectedmovies) {
    console.log(selectedmovies);
    document.getElementById("totalmoviedatabase").innerHTML = "";
    return selectedmovies.forEach(movie => {
        let listNode = document.createElement("li"); //How to create a <li> element
        let posterNode = document.createElement("img"); //How to create an image element
        posterNode.src = movie.Poster;
        listNode.appendChild(posterNode); //join the posterNode to the ListNode
        document.getElementById("totalmoviedatabase").appendChild(listNode); //Join the listNode to the <ul> (totalmoviedatabase) element
        // console.log(listNode);
        // console.log(posterNode);
    });
};

//Function to filter the movies
const handleOnChangeEvent = function(event) {
    console.log(event.target);
    const filterMovies = function(wordInMovieTitle) {
        return movies.filter(function(movie) {
            //console.log(wordInMovieTitle);
            return movie.Title.includes(wordInMovieTitle);
        });
    };
    switch (event.target.value) {
        case "nieuwsteFilms":
            console.log("nieuwsteFilmsbtn has been clicked");
            break;
        case "avengersFilms":
            //console.log("avengersFilmsbtn has been clicked");
            filterMovies("Avengers");
            //console.log(filterMovies("Avengers"));
            const AvengersArray = filterMovies("Avengers");
            addMoviesToDom(AvengersArray);
            //console.log(event);
            break;
        case "xmenFilms":
            console.log("xmenFilmsbtn has been clicked");
            filterMovies("X-Men");
            //console.log(filterMovies("Avengers"));
            const XmenArray = filterMovies("X-Men");
            addMoviesToDom(XmenArray);
            break;
        case "princessFilms":
            console.log("princessFilmsbtn has been clicked");
            filterMovies("Princess");
            //console.log(filterMovies("Princess"));
            const PrincessArray = filterMovies("Princess");
            addMoviesToDom(PrincessArray);
            break;
        case "batmanFilms":
            console.log("batmanFilms has been clicked");
            filterMovies("Batman");
            //console.log(filterMovies("Batman"));
            const BatmanArray = filterMovies("Batman");
            addMoviesToDom(BatmanArray);
            break;
        default:
            addMoviesToDom(movies)
            console.log('no case value has been found');
    }
};

const addEventListeners = function() {
    const grabbedMovieFilters = document.getElementsByName("movieFilters") //Grab all the filterbtns
        //console.log(grabbedMovieFilters);
    grabbedMovieFilters.forEach(radiobtn => { //scrolling through all btns to add the event listener
        radiobtn.addEventListener("change", handleOnChangeEvent);
    });
};
//console.log(addEventListeners);

document.addEventListener('DOMContentLoaded', function(event) {
    addMoviesToDom(movies);
    addEventListeners();
});

const filterMovies = movies.filter(function(wordInMovieTitle) {
    return wordInMovieTitle.Title === wordInMovieTitle
});
// const dcHeroes = superheroes.filter(function(hero) {
//     return hero.publisher === "DC Comics";
// });