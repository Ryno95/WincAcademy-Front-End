const API_KEY = "316ab108df56a175cf69c9319f17c944";

const getData = async function() {
    try {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const res = await fetch(apiUrl, { method: "GET" });
        console.log("this is the response", res);
        const processedData = await res.json();
        console.log("this is the processed data", processedData);
        return processedData;
    } catch (error) {
        console.log(error)
    }
};


const GetFavMovie = async function() {
        try {
            const apiUrl = `https://api.themoviedb.org/3/movie/420818?api_key=${API_KEY}`;
            const result = await fetch(apiUrl, { method: "GET" });
            console.log("this is your fvourite movie", result);
            const FavMovieProcessed = await result.json();
            console.log("this is your processed fav movie", FavMovieProcessed);
            return FavMovieProcessed;
        } catch (error) {
            console.log(error);
        }
    }
    //In a code block, only one return statement can be used as all code after the return statement will not be run.