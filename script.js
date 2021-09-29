// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword() {
  var passLength = "How many characters do you want in your password? (min: 8, max: 128)"
  var lowerChar = "Do you want to include lowercase characters?"
  var upperChar = "Do you want to include uppercase characters?"
  var numbers = "Do you want to include a numeric character?"
  var specialChar = "Do you want to include special characters?"
// }

function generatePassword() {
  var stringToReturn = "ahsdfasd"
  var lengthAnswer = prompt(passLength); // this happens in an instant and is lost--never stored in vaariable
  if(lengthAnswer >= 8 && lengthAnswer <=128) {
    var lowerAnswer = confirm(lowerChar);
  } else{
    alert("Please enter a valid length")
  }
  
  var upperAnswer = confirm(upperChar); 
  var numAnswer = confirm(numbers);
  var specialAnswer = confirm(specialChar);


  // return a string that fits the criteria based on the answers given.
  return stringToReturn;
}

// Write password to the #password input
function writePassword() {
  // this tells me that generatePassword needs an output of a string
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


