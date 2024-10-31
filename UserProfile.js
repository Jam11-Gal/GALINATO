// UserProfile.js

// Collect user information
let firstName = prompt("Jamela:");
let lastName = prompt("Galinato:");
let age = prompt("19:");
let favoriteNumber = prompt("11:");
let favoriteColor = prompt("Purple:");

// Store the information in variables
let userProfile = {
  fullName: firstName + " " + lastName,
  age: age,
  favoriteNumber: favoriteNumber,
  favoriteColor: favoriteColor,
};

// Log the user profile to the console
console.log(userProfile);
