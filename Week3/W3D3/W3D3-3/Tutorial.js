// // //Voorbeeld
// const myFirstFetchFunc = function() {
//     fetch("https://swapi.co/api/people/1/") //Litteraly "fetch" data form "server"
//         .then(response => response.json()) //.then(method) take the response form the fetch and convert it to .json format
//         .then(data => console.log(data)) //.then log the data to the console
//         .catch(err => { //if promise is notresolved .catch the error and log it to the console
//             console.log(err)
//         })
// };
//myFirstFetchFunc();

// const myFirstAsynchFunct = async function() {
//     try {
//         fetch("https://swapi.co/api/people/1/");
//         await (response => response.json());
//         await (data => console.log(data));
//     } catch (error) {
//         console.log(error);
//     }
// };
// myFirstAsynchFunct();




// const myFirstAsynchFunct = async function() {
//     try {
//         const response = fetch("https://swapi.co/api/people/1/")
//         console.log("response received")
//         const processedResponse = await response.json();
//         console.log(processedResponse)
//         const convertData = await console.log(data);
//         console.log(convertData)
//     } catch (err) {
//         console.log(err)
//     }
// };

// myFirstAsynchFunct();