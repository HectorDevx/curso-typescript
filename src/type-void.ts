// Explicito
function showInfo(user: any): any {
  console.log("User Info", user.id, user.username, user.firstName);
  // return "hola"; La función cambia de void a string.
}

showInfo({ id: 1, username: "dex", firstName: "Gerardo" });

// Inferido
function showFormattedInfo(user: any) {
  console.log(
    "User Info",
    `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
  `
  );
}

showFormattedInfo({ id: 1, username: "dex", firstName: "Gerardo" });

// Tipo void, como tipo de dato en variable.
let unusable: void;
// unusable = null; // Debido al moso estricto esto es un error.
unusable = undefined;

// Tipo: Never

function handleError(code: number, message: string): never {
  // Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, "Not found");
} catch (error) {}

function sumNumbers(lim: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
  // reurn sum
}

sumNumbers(10);
// Ciclo infinito
