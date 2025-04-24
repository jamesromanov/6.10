"use strict";
const throwErr = function () {
    throw Error("Error occured!");
};
const loopForever = () => {
    while (true) {
        console.log("Looping forever");
    }
};
loopForever();
