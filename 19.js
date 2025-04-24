"use strict";
let response = function (data) {
    return data;
};
let api = response({
    success: false,
    data: {
        userName: "someon",
        name: "someone",
    },
});
console.log(api);
