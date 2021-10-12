// Assignment code here
var caracthers = [];
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!#$%&'*+,-./:;<=>?@\^_`|~";
var numbers = "0123456789"
var lenghtMin = 8;
var lenghtMax = 128;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// lenght, which caracthers etc
var choices = function () {
  var item = allowedCharacters[Math.floor(Math.random() *  allowedCharacters.length)]
  
  return item;
};
}
  // question: how many characters (8 to 128)
  var characters = prompt("How many characters would you like your password to have? Choose between 8 and 128.");
  
  // less than 8 characters
  if 
  window.alert("You password should have at least 8 characters. Try again.");
  
  // more than 128 characters
  window.alert("You password should not have more than 128 characters. Try again.");

  // include special characters

  // include numbers

  // inlcude lowercase letters

  // inlcude uppercase letters



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
