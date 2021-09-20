"use strict";
console.log("Hola Platzi World!");
// Tipo Number
//Explicito
var phone;
phone = 5588548956;
// phone = 'hola'; // Error
7; // Inferido
var phoneNumber = 5485658423;
// phoneNumber = true; // Error por tipo de dato
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo Boolean
// Tipado explicito
var isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// Tipo Strings
var username = "dex";
username = "staar";
// username = true; // Error
// Template strings
// Uso de back-tick
var userInfo;
userInfo = "\n  User Info:\n  username: " + username + "\n  firstName: " + (username + " Reyes") + "\n  phone: " + phone + "\n  isPro: " + isPro + "\n";
console.log("userInfo", userInfo);
