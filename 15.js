"use strict";
var MathematicFunction;
(function (MathematicFunction) {
    function add(a, b) {
        return a + b;
    }
    MathematicFunction.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathematicFunction.subtract = subtract;
})(MathematicFunction || (MathematicFunction = {}));
let result1 = MathematicFunction.add(1, 2);
let result2 = MathematicFunction.subtract(3, 5);
console.log(result1);
console.log(result2);
