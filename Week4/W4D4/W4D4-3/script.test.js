// Functionaliteiten:

// 1. Voeg de volgende verificaties toe:
//     1. password mag niet langer zijn dan 8 characters
//     2. password mag niet null zijn
//     3. password moet tenminste 1 uppercase character hebben.
//     4. password moet tenminste 1 lowercase character hebben.
//     5. password moet tenminste 1 nummer hebben

// De gebruiker moet op de hoogte worden gesteld van de volgende uitzonderingen:
// 1. Password is OK als tenminste 3 van de bovenstaande condities waar zijn. Hoeveel tests moet je maken? 
// 2. Password is nooit OKE als verificatie 1.4 niet true is.

const passwordChecker = require('./script.js');
 test('password >= 8 letters', () =>{
     expect(passwordChecker.checkLength("apples")).toBeLessThan(9);
 });

 test("Value should not be null", () => {
     expect(passwordChecker.checkNull("apples")).not.toBeNull();
 });

 test('password contains Cap letters', () => {
     expect(passwordChecker.checkCaps("Apples")).toContain(A-Z)
 } )

//  test('password cannot be Null'), () =>{
//      expect(passwordChecker.)
// }

// test('password should contain atleast one uppercase letter'), () =>{
     
// }

// test('password should contain at least one lowercase letter'), () =>{
     
// }

// test('password has to contain at least one number'), () =>{
     
// }
