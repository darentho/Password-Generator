
function generatePassword() {
    //  I have defined the variable sets. I created an array for each var that contains separate characters that will then be appended to a blank array with concat.
    var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
   //this is the empty array that will then be appended using concat.
    var selectedArray = [];


    // These if statements determine the user choices and then append them to the blank array I created.
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
  