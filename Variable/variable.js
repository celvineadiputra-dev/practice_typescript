// Primive Types
// 1. Boolean
let isValid = true;
// 2. Number
let age = 21;
// 3. String
let myName = "Celvine";
// 4. Array
let myHobby = ['Code', 'Reading'];
// 5. Enum
var married;
(function (married) {
    married[married["Yes"] = 0] = "Yes";
    married[married["No"] = 1] = "No";
})(married || (married = {}));
;
let isMarried = married.Yes;
// 6. Any
let myFavNumber = 1;
myFavNumber = "1";
myFavNumber = "maybe 1";
// 7. Void
const sayLove = () => {
    alert("I Love TypeScript");
};
