let password = "RubberDuck2";

let alphabet = "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Checking if password has a letter
let hasLetter = false;
for (let i = 0; i < password.length; i++) {
    if (alphabet.indexOf(password[i]) > 0) {
        hasLetter = true;
        break;
    }
}

//Checking if password has a number
let numbers = "0123456789";
let hasNumber = false;
for (let i = 0; i < password.length; i++) {
    if (numbers.indexOf(password[i]) > 0) {
        hasNumber = true;
        break;
    }
}

// Checking if password has a space or not
let hasSpace = false;
if (password.indexOf(" ") > 0) {
    hasSpace = true;
}

// Checking for no forbidden words (and some extra ones I thought was appropriate)
let forbiddenWord = ["letmein", "password", "opensesame", "guest", "1234567890"];
let isForbidden = false;
for (i = 0; i < forbiddenWord.length - 1; i++) {
    if (password === forbiddenWord[i])
    {
        isForbidden = true;
    }
}



// Final exeuction to have a successful password if it is at least 10 characters, has a letter, has a number, does not have a space, and does not have a forbidden word.
if (password.length >= 10 && hasLetter && hasNumber && !hasSpace && !isForbidden) {
    console.log("Success!");
} else {
    console.log("Failure!");
}
