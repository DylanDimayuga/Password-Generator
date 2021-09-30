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
  var stringToReturn = ""
  var lengthAnswer = prompt(passLength); // this happens in an instant and is lost--never stored in variable
  if(lengthAnswer >= 8 && lengthAnswer <=128) {
    var lowerAnswer = confirm(lowerChar);
  } else{
    alert("Please enter a valid length") & generatePassword();
  }

  var upperAnswer = confirm(upperChar); 
  var numAnswer = confirm(numbers);
  var specialAnswer = confirm(specialChar);

  var abc = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var upperabc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  var charString = "";

  if (lowerAnswer === true){
    charString += abc;
  }
  if (upperAnswer === true){
    charString += upperabc;
  }
  if (numAnswer === true){
    charString += num;
  }
  if (specialAnswer === true){
    charString += special;
  }

  if (lowerAnswer === false && upperAnswer === false && numAnswer === false && specialAnswer === false) {
    alert("Needs to include at least one type of character for the password.") + generatePassword();
  }

  for (i = 1; i <= lengthAnswer; i++) {
    stringToReturn += charString.charAt(Math.floor(Math.random() * charString.length));
    console.log(stringToReturn + "Inside while Loop");
  }
  console.log(stringToReturn + "Outside while loop");
  console.log(charString)

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


