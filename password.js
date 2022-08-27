let password = "RubberDuck2";

let alphabet = "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let hasLetter = false;
for(let i = 0; i < password.length; i++) {
    if (alphabet.indexOf(password[i]) > 0) {
        hasLetter = true;
        break;
    }
}

let numbers = "0123456789";
let hasNumber = false;
for(let i = 0; i < password.length; i++) {
    if (numbers.indexOf(password[i]) > 0) {
        hasNumber = true;
        break;
    }
}

// Alternate way: This is from some major Googling.  ---> if (password.length >= 10 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
if (password.length >= 10 && hasLetter && hasNumber) {
    console.log("Success!");
} else {
    console.log("Failure!");
}
