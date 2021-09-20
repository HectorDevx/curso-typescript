// Explicito
let idUser: any;
idUser = 1; //number
idUser = "1"; //string
console.log("idUser", idUser);

// Inferido
let otherId;
otherId = 1;
otherId = "1";
console.log("otherId", otherId);

// Si el tipo de valor cambia podemos generar un error.
let surprise: any = "hello typescript";
// surprise.sayHello(); // Error
const res = surprise.substring(6); // Error
console.log("res", res);
