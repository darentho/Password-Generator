
function generatePassword() {
    //  I have defined the variable sets. I created an array for each var that contains separate characters that will then be appended to a blank array with concat.
    var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
   //this is the empty array that will then be appended using concat.
    var selectedArray = [];


    // These if statements determine the user options and then append them to the blank array I created.
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
    // This will reset the choice value to 0 so it can restart the loop if the user entered anything besides a number.
    userChoice = 0;
  }
}