// Global variables
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', 
                        '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']',  
                        '^', '_', '`', '{', '|', '}', '~'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function

var generatePassword = function() {

    var passwordGenerated = ""

    // Ask users about the length of password
    var numCharacters = parseInt(window.prompt("How many characters would you like your password to contain?"));

    // Check the length of requested password is at least 8 characters
    if (numCharacters < 8) {
      window.alert("Your password must be at least 8 characters");
      generatePassword();
    }
  
    // Check the length of requested password is no more than 128 characters
    else if (numCharacters > 128) {
      window.alert("Your password must be no more than 128 characters");
      generatePassword();
    }

    // When requested password is between 8 to 128 characters
    else if (numCharacters >= 8 && numCharacters <=128) {
      var okSpecial = window.confirm("Click OK to confirm including special characters.");
      var okNumeric = window.confirm("Click OK to confirm including numeric values.");
      var okUpperCase = window.confirm("Click OK to confirm including upprcase characters.");
      var okLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
      
      var combinedArray = [];


      if (okSpecial) {
        var randomElement = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        passwordGenerated = passwordGenerated + randomElement;
        combinedArray = combinedArray.concat(specialCharacters);
      }

      if (okNumeric) {
        var randomElement2 = numbers[Math.floor(Math.random() * numbers.length)];
        passwordGenerated = passwordGenerated + randomElement2;
        combinedArray = combinedArray.concat(numbers);
      }

      if (okUpperCase) {
        var randomElement3 = upperCase[Math.floor(Math.random() * upperCase.length)];
        passwordGenerated = passwordGenerated + randomElement3;
        combinedArray = combinedArray.concat(upperCase);
      }
      
      if (okLowerCase) {
        var randomElement4 = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        passwordGenerated = passwordGenerated + randomElement4;
        combinedArray = combinedArray.concat(lowerCase);
      }

      if (!okSpecial && !okNumeric && !okLowerCase && !okUpperCase) {
        alert("At least one of the criteria should be selected. Please try again!");
        return;
      }

      var passwordLength = numCharacters - passwordGenerated.length;
      for (var i = 0; i < passwordLength; i++) {
        passwordGenerated = passwordGenerated + combinedArray[Math.floor(Math.random() * combinedArray.length)];
      }

    
      return passwordGenerated;
    }

    else {
      alert("Please enter a valid number! Please try again!");
     return;
    }
  

};

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  if (!password) {
    password = "";
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
