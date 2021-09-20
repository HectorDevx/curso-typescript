"use strict";
// Explicito
function showInfo(user) {
    console.log("User Info", user.id, user.username, user.firstName);
    // return "hola"; La función cambia de void a string.
}
showInfo({ id: 1, username: "dex", firstName: "Gerardo" });
// Inferido
function showFormattedInfo(user) {
    console.log("User Info", "\n    id: " + user.id + "\n    username: " + user.username + "\n    firstName: " + user.firstName + "\n  ");
}
showFormattedInfo({ id: 1, username: "dex", firstName: "Gerardo" });
// Tipo void, como tipo de dato en variable.
var unusable;
// unusable = null; // Debido al moso estricto esto es un error.
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, "Not found");
}
catch (error) { }
function sumNumbers(lim) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // reurn sum
}
sumNumbers(10);
// Ciclo infinito
