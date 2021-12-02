// Assignment code here
var promptLength= window.prompt ('How many characters would you like in your password? Please enter a number between 8 and 128');

var promptLowercase =window.prompt('Would you like Lowercase letters in your password? Enter "YES" or "NO" to choose.');
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

if (promptLowercase === "YES") 

var getLowercase =lowercase[Math.floor(Math.random()*lowercase.length)];

  for (var i=0; i<Math.ceil(promptLength*.25); i++) {

  console.log(getLowercase[i]*(promptLength*.25));
  }


var promptUppercase =window.prompt('Would you like Uppercase letters in your password? Enter "YES" or "NO" to choose.');

var promptNumbers =window.prompt('Would you like Numbers in your password? Enter "YES" or "NO" to choose.');

var promptSpecialCharacters=window.prompt('Would you like Special Characters in your password? Enter "YES" or "NO" to choose');





var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = [1,2,3,4,5,6,7,8,9,0];

var specialCharacters = ['!','@','#','$','%','^','&','*'];

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

  
