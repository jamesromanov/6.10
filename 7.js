"use strict";
const notAnyValue = (a) => {
    let name = typeof a;
    return name;
};
console.log(notAnyValue("hello"));
console.log(notAnyValue(true));
console.log(notAnyValue([true]));
