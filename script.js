// Assignment code here

var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = [1,2,3,4,5,6,7,8,9,0];

var specialCharacters = ['!','@','#','$','%','^','&','*'];

var promptNumberOfCharacters=window.prompt ('How many characters would you like in your password? Please type a number between 8 and 128');

var NumberOfCharacters=parseInt(promptNumberOfCharacters,10);

var LowerUpper = lowercase.concat(uppercase);




var promptLowercase =window.prompt('Would you like Lowercase letters in your password? Enter "YES" or "NO" to choose.');

var promptUppercase =window.prompt('Would you like Uppercase letters in your password? Enter "YES" or "NO" to choose.');

var promptNumbers =window.prompt('Would you like Numbers in your password? Enter "YES" or "NO" to choose.');

var promptSpecialCharacters=window.prompt('Would you like Special Characters in your password? Enter "YES" or "NO" to choose');

if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers === "NO" && promptSpecialCharacters==="NO") {

for (var i=0;i<NumberOfCharacters;i++){
  var randLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];

console.log(randLowercase);

}
}
if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers === "NO" && promptSpecialCharacters==="NO"){



  for (var i=0; i<NumberOfCharacters;i++){
    var randLowerUpper = LowerUpper[Math.floor(Math.random() *LowerUpper.length)];

    console.log(randLowerUpper);
   

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

