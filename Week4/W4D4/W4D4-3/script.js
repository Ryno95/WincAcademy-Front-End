// const passwordChecker = function(input){
//         if(input.length <= 8){
//             console.log("Your pw is the correct length")
//             return input.length
//         } else {
//             console.log("Your pw can't be longer than 8 letters")
//         };

//         if(input == ""){
//             console.log("Your password has to contain letter")
//             return input
//         } else {
//             console.log("I'm glad your password contains something")
//         };
        
    // };
    const passwordChecker = {
        input: "Apples",
        checkLength: function(input){
            if(input.length <= 8){
                console.log("Your pw is the correct length")
                return input.length
        } else {
            console.log("Your pw can't be longer than 8 letters")
        }
    },
        checkNull: function(input) {
            
            if(input == null){
                console.log("your password has to contain something")
                return null;
            } else {
                console.log("well done big boy you figured out how to type something")
            };
        },
        checkCaps: function(input) {
            const upperCaseLetters = /[A-Z]/g;
            if(input.value.match(upperCaseLetters)){
                console.log("your password contains uppercase letters")
                return true
            } else {
                console.log("your pw needs to contain a capital letter")
            };
        }

        //     if (x){
        //         console.log("your password has to contain something")
        //         return x
        //     } else {
        //         console.log("well done big boy you figured out how to type something")
        //     }
        // }

};
passwordChecker.checkCaps("Apples");
//     checkNullVal: function(input){

// //Function to check null value here
//     },
//     checkCapLetters: function(){
// //Fucntion to check if contain atleast one cap letter
//     },
//     checkLowCaseLetters: function(){
// //Function to check if contain atleast one lowercase letter
//     },
//     checkNum: function(){
// //Function to check if contain atleast one number
//     }
// passwordChecker("applescider");
// passwordChecker("apples");



module.exports = passwordChecker;