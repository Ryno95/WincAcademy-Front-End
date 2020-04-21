const API_KEY = "316ab108df56a175cf69c9319f17c944";

const getData = async function() {
    try {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const res = await fetch(apiUrl, { method: "GET" });
        console.log(res);
        const processedData = await res.json();
        console.log(processedData);
    } catch (error) {
        console.log(error)
    }
};