 //webexvragen: 5. uitleg, kan je ook de meer dan een object detail oproepen?
 //

 const numbers = [14, 8, 27, 6];
 const movies = [
     { title: "Star Wars", rating: 5 },
     { title: "Frozen 2", rating: 5 }
 ];
 //map
 const powers = numbers.map(function(number) {
     return number + 5;
 });
 //behoudt de volgorde
 //behoudt de hoeveelheid items
 const titles = movies.map(function(movie) {
     return movie.title;
 });

 //filter 
 const recommend = movies.filter(function(movie) {
     return movie.rating > 5;
     //altijd return statement
     //transformeert niet individuele items
 })

 //reduce
 //vaak met nummers
 //voorbeeld om alle nummers bij elkaar te plussen
 //wanneer je een specfiek resultaat wilt
 //bijv. grootste, meeste, kleinste, totaal, minimum
 //const names = ["Marieke", "Jan", "Evert"];
 // const result = numbers.reduce(function(previous, current) {
 //     return previous + current;
 // });

 // const result = numbers.reduce(function(previous, current) {
 //     if (current > previous) {
 //         return current;
 //     } else {
 //         return previous;
 //     }
 // });