function generatePassword() {
   //  I have defined the variable sets. I created an array for each var that contains separate characters that will then be appended to a blank array with concat.
    var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
    //this is the empty array that will then be appended using concat.
    var selectedArray = [];
  
    var passwordLength = getPasswordLength();
  
    var typeSelected = false;
    // This loop ensures the user selects at least one character type
    while (typeSelected == false) {
      var lowerCase = getChoice("lowercase");
      var upperCase = getChoice("uppercase");
      var numericCharacters = getChoice("numeric");
      var specialCharacters = getChoice("special");
      if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
        typeSelected = true;
      } else {
        window.alert("You must select at least one character type.")
      }
    }
  
     // These if statements determine the user options and then append them to the blank array.
     //lowerCase, upperCase etc are the variables used for the "While" Loop with the getChoice function.
    if (lowerCase) {
      selectedArray = selectedArray.concat(lowerCaseArr);
    }
    if (upperCase) {
      selectedArray = selectedArray.concat(upperCaseArr);
    }
    if (numericCharacters) {
      selectedArray = selectedArray.concat(numArr);
    }
    if (specialCharacters) {
      selectedArray = selectedArray.concat(specialArr);
    }
  
    var passwordString = "";
    // This loop will take the appended array, randomly choose from them, then append the selections to generate a password.
    for (var i = 0; i < passwordLength; i++) {
      passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
    }
  
    return passwordString;
  }
  
  function getPasswordLength() {
    var userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
      userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
  
      // Checking here to make sure the user entered a number and not a letter.
      if (isNaN(userChoice)) {
        // This will restart the loop if user does not choose a number
        userChoice = 0;
      }
    }
  
    return userChoice;
  }
  
  // This is a simplified function to be used with the validation loop "While".
  function getChoice(promptedOption) {
    var userChoice = "a",
      messagePrompt = "";
    var messagePrompt = ('Would you like '.concat(promptedOption));
    messagePrompt = messagePrompt.concat(' characters (y/n)?');
    // This loop makes sure the user enters a valid response.
    while (userChoice = "a") {
      userChoice = (window.prompt(messagePrompt));
      // The line below will serve for responsiveness for mobile view. 
      userChoice = userChoice.toLowerCase();
      if (userChoice == "y") {
        return true;
      } else if (userChoice == "n") {
        return false;
      }
    }
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);