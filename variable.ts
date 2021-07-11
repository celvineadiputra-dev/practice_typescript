// Primive Types
// 1. Boolean
let isValid : boolean = true;
// 2. Number
let age : number = 21;
// 3. String
let myName : string = "Celvine"
// 4. Array
let myHobby : string[] = ['Code', 'Reading'];
// 5. Enum
enum married {Yes, No};
let isMarried : married = married.Yes
// 6. Any
let myFavNumber : any = 1
myFavNumber = "1"
myFavNumber = "maybe 1"
// 7. Void
const sayLove = () : void => {
    alert("I Love TypeScript");
}