//console.log("apples en peren");

const importedGenres = async function() {
    console.log("Test imported genres")
    const data = await getData();
    convertGenresToList(data);
};


const convertGenresToList = function(listdata) {
    console.log("this is list data", listdata);
    const movieGenres = listdata.genres
    console.log(movieGenres + "Hier zijn je movie-genres");
    movieGenres.forEach(movieGenre => {
        const listItem = document.createElement('li');
        const listItemContent = `genre name: ${movieGenre.name}, id: ${movieGenre.id}`
        listItem.appendChild(document.createTextNode(listItemContent));
        document.getElementById("movieGenreList").append(listItem);
    });
};

const importMyFavMovie = async function() {
    console.log("Test ImportMyFavMovie");
    const data = await GetFavMovie();
    convertMyFavMovieToP(data);
};

const convertMyFavMovieToP = function(pData) {
    console.log("This is your Pdata", pData);
    const myFavMovie = pData.original_title
    console.log("hier is de naam van je fav movie", myFavMovie);
    const PItem = document.createElement("p");
    const PItemContent = `${myFavMovie}`
    PItem.appendChild(document.createTextNode(PItemContent));
    document.getElementById("favoriteMovie").append(PItem);
}




console.log("import fav movie function", importMyFavMovie());
console.log("imported genres function", importedGenres());



// 2 kinds of function: 1 returns "something"
//                       2 does 'something'

// Function call altijd onderaan in de file zetten. Start program!

//Stappen plan

// eigen functies schrijben vanuit voorbeeld js/templates