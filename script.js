// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!#$%&'*+,-./:;<=>?@^/_`|~";
var numbers = "0123456789";
var allChars = "";
var lenghtMin = 8;
var lenghtMax = 128;
var lenght = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// lenght, which caracthers etc
  // question: how many characters (8 to 128)
  var pwLenght = function() {
    var lenght = window.prompt("How many characters would you like your password to have? Choose between 8 and 128.");

    // less than 8 characters
    if (lenght < 8) {
      window.alert("You password should have at least 8 characters. Try again.");
      pwLenght();
      // more than 128 characters
    } else if (lenght > 128) {
      window.alert("You password should not have more than 128 characters. Try again.");
      pwLenght();
    } else {
      return lenght;
    }
  };

var choices = function() {
    var value = allChars[Math.floor(Math.random() * allChars.length)];
    return value;
};

  // include special characters
  var specialFunction = function() {
      var specialConf = window.confirm("Would you like to include special caracthers?");
      if (specialConf) {
        allChars = allChars.concat(specials);
      }
  };
  
  // include numbers
  var numbersFunction = function() {
    var numbersConf = window.confirm("Would you like to include numbers?");
    if (numbersConf) {
      allChars = allChars.concat(numbers);
    } 
  };

  // inlcude lowercase letters
  var lowercaseFunction = function() {
    var lowercaseConf = window.confirm("Would you like to include lowercase letters?");
    if (lowercaseConf) {
      allChars = allChars.concat(lowercase);
    }
  };

  // inlcude uppercase letters
  var uppercaseFunction = function() {
    var uppercaseConf = window.confirm("Would you like to include uppercase letters?");
    if (uppercaseConf) {
      allChars = allChars.concat(uppercase);
    } else {
      window.alert("You must choose at least one of the criterias.");
      return specialFunction(), numbersFunction(), lowercaseFunction(), uppercaseFunction();
    }
  };

function generatePassword() {
  var lenght = pwLenght();
    specialFunction();
    numbersFunction();
    lowercaseFunction();
    uppercaseFunction();
  
  var password = "";

  for (let i = 0; i < lenght; i++){
    password += choices();
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";

  var password = "";
  password = generatePassword();
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
