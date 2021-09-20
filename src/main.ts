console.log("Hola Platzi World!");

// Tipo Number
//Explicito
let phone: number;
phone = 5588548956;
// phone = 'hola'; // Error

7; // Inferido
let phoneNumber = 5485658423;
// phoneNumber = true; // Error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo Boolean
// Tipado explicito
let isPro: boolean;
isPro = true;
// isPro = 1; // Error

// Inferido
let isUserPro = false;
isUserPro = true;

// Tipo Strings
let username: string = "dex";
username = "staar";
// username = true; // Error

// Template strings
// Uso de back-tick
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username + " Reyes"}
  phone: ${phone}
  isPro: ${isPro}
`;

console.log("userInfo", userInfo);
