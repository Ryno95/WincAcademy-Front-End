const colors = ['yellow', 'blue', 'red', 'orange']

/*for (let i = 0; colors.length > i; i++) {
    console.log(colors[i])
}*/

colors.forEach(function(color) {
    console.log(color)
});

//1. mijn for loop neemt 3 regels in beslag
//2. mijn forEach method neemt ook 3 regels in beslag
//3. meer overzichtelijk en logischer te schrijven