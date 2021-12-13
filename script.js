
// Assignment code here
var chosenPassword="";

function GeneratePassword () {
  var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var numbers = [1,2,3,4,5,6,7,8,9,0];

  var specialCharacters = ['!','@','#','$','%','^','&','*'];


  var promptPasswordLength=window.prompt ('How many characters would you like in your password? Please type a number between 8 and 128');
  var passwordLength=parseInt(promptPasswordLength,10);
  if (passwordLength<8 || passwordLength>128) {
    window.alert ("You choose an incorrect value. Please start again by refreshing the browser. ");
    return false;}
  
  
  


//prompt for how many characters. Second var turns it into a number from a string


 

var promptLowercase =window.prompt('Would you like Lowercase letters in your password? Enter "YES" or "NO" to choose.');

    var promptUppercase =window.prompt('Would you like Uppercase letters in your password? Enter "YES" or "NO" to choose.');
    
    var promptNumbers =window.prompt('Would you like Numbers in your password? Enter "YES" or "NO" to choose.');
    
    var promptSpecialCharacters=window.prompt('Would you like Special Characters in your password? Enter "YES" or "NO" to choose');

    // lowercase only 
if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers === "NO" && promptSpecialCharacters==="NO")


var confirmPassword = window.confirm('You would like lowercase only?');


if (confirmPassword)

{

for (var i=0;i<passwordLength;i++){
  var randLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];

  chosenPassword=randLowercase+chosenPassword
}

console.log(chosenPassword);

return chosenPassword;

}



//lower case and uppercase only
var LowerUpper = lowercase.concat(uppercase);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers === "NO" && promptSpecialCharacters==="NO")

var confirmPassword = window.confirm('You would like lowercase and uppercase?');


if (confirmPassword)
{

  for (var i=0; i<passwordLength;i++){
   var randLowerUpper = LowerUpper[Math.floor(Math.random() *LowerUpper.length)];

   chosenPassword=randLowerUpper+chosenPassword
  }

    console.log(chosenPassword); 

    return chosenPassword

}


//lower case, uppercase and numbers 
var LowerUpperNum = LowerUpper.concat(numbers);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters==="NO")

var confirmPassword = window.confirm('You would like lowercase, uppercase, and numbers?');


if (confirmPassword)
{
  for (var i=0; i<passwordLength; i++){
    var randLowerUpperNum = LowerUpperNum[Math.floor(Math.random()*LowerUpperNum.length)];

    chosenPassword=randLowerUpperNum+chosenPassword
  }

    console.log(chosenPassword);

    return chosenPassword;
  
}

//lowercase, uppercase, numbers, and special characters 
  var LowerUpperNumSpecial = LowerUpperNum.concat(specialCharacters);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters==="YES")

var confirmPassword = window.confirm('You would like lowercase, uppercase, numbers, and special characters?');


if (confirmPassword)
{
  for (var i=0; i<passwordLength; i++) {
    var randLowerUpperNumSpecial = LowerUpperNumSpecial[Math.floor(Math.random()*LowerUpperNumSpecial.length)];

    chosenPassword=randLowerUpperNumSpecial+chosenPassword
  }

    console.log(chosenPassword);

    return chosenPassword;

  }
  //lowercase, numbers

  var LowerNum = lowercase.concat(numbers);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="YES" && promptSpecialCharacters ==="NO")

  var confirmPassword = window.confirm('You would like lowercase and numbers?');


if (confirmPassword)
  {
    for (var i=0; i<passwordLength; i++) {
      var randLowerNum= LowerNum[Math.floor(Math.random()*LowerNum.length)];

      chosenPassword=randLowerNum+chosenPassword;
    }

      console.log(chosenPassword);

      return chosenPassword;
  
  }


    
  //lowercase, numbers, special

  var LowerNumSpecial =LowerNum.concat(specialCharacters);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="YES" && promptSpecialCharacters ==="YES")

  var confirmPassword = window.confirm('You would like lowercase, numbers, and special characters?');


if (confirmPassword)
  {
    for (var i=0; i<passwordLength; i++) {
      var randLowerNumSpecial =LowerNumSpecial[Math.floor(Math.random()*LowerNumSpecial.length)];

      chosenPassword=randLowerNumSpecial+chosenPassword;
    }
  console.log(chosenPassword);

  return chosenPassword;
  
}


  //lowercase, special

  var LowerSpecial = lowercase.concat(specialCharacters);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="NO" && promptSpecialCharacters ==="YES")
  
  var confirmPassword = window.confirm('You would like lowercase and special characters?');


  if (confirmPassword)
  {
    for (var i=0; i<passwordLength; i++) {
      var randLowerSpecial= LowerSpecial[Math.floor(Math.random()*LowerSpecial.length)];

    chosenPassword=randLowerSpecial+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;

  }

  //lowercase, uppercase, special
  
  var LowerUpperSpecial = LowerUpper.concat(specialCharacters);

  if (promptLowercase==="YES" && promptUppercase ==="YES" && promptNumbers =="NO" && promptSpecialCharacters ==="YES")

  var confirmPassword = window.confirm('You would like lowercase, uppercase, and special characters?');


if (confirmPassword)
{
  for (var i=0;i<passwordLength; i++) {
  var randLowerUpperSpecial = LowerUpperSpecial[Math.floor(Math.random()*LowerUpperSpecial.length)];

  chosenPassword=randLowerUpperSpecial+chosenPassword;
  }

  console.log(chosenPassword);

  return chosenPassword;

}

  //uppercase

  if (promptLowercase ==="NO" && promptUppercase ==="YES" && promptNumbers =="NO" && promptSpecialCharacters ==="NO")

  var confirmPassword = window.confirm('You would like uppercase only?');


if (confirmPassword)
  {
    for (var i=0; i<passwordLength; i++) {
      var randUppercase =uppercase[Math.floor(Math.random()*uppercase.length)];

      chosenPassword=randUppercase+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;

  }

  
  //uppercase, numbers

  var UpperNumbers= uppercase.concat(numbers);

  if (promptLowercase ==="NO" && promptUppercase ==="YES" && promptNumbers =="YES" && promptSpecialCharacters ==="NO")
 
  var confirmPassword = window.confirm('You would like uppercase and numbers?');


  if (confirmPassword)

  {
    for (var i=0; i<passwordLength; i++) {
      var randUpperNumbers= UpperNumbers[Math.floor(Math.random()*UpperNumbers.length)];

      chosenPassword=randUpperNumbers+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;
  }


  //uppercase, numbers, special

  var UpperNumSpecial=UpperNumbers.concat(specialCharacters);

  if (promptLowercase==="NO" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters ==="YES")

  var confirmPassword = window.confirm('You would like uppercase, numbers, and special characters?');


if (confirmPassword)
  {
    for (var i=0; i<passwordLength; i++) {
      var randUpperNumSpecial= UpperNumSpecial[Math.floor(Math.random()*UpperNumSpecial.length)];

      chosenPassword=randUpperNumSpecial+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;
  }

  //uppercase, special

  var UpperSpecial=uppercase.concat(specialCharacters);

  if (promptLowercase==="NO" && promptUppercase ==="YES" && promptNumbers ==="NO" && promptSpecialCharacters ==="YES")

  var confirmPassword = window.confirm('You would like uppercase and special characters?');


if (confirmPassword)
  {
  for (var i=0; i<passwordLength; i++) {
    var randUpperSpecial= UpperSpecial[Math.floor(Math.random()*UpperSpecial.length)];

    chosenPassword=randUpperSpecial+chosenPassword;

  }
  

  console.log(chosenPassword);

  return chosenPassword;
}

  //numbers, special

  var NumSpecial=numbers.concat(specialCharacters);

  if (promptLowercase==="NO" && promptUppercase==="NO" && promptNumbers ==="YES" && promptSpecialCharacters==="YES")

  var confirmPassword = window.confirm('You would like numbers and special characters?');


if (confirmPassword)
  {
  
  for (var i=0; i<passwordLength; i++) {
    var randNumSpecial=NumSpecial[Math.floor(Math.random()*NumSpecial.length)];

    chosenPassword=randNumSpecial+chosenPassword;
  }
  console.log(chosenPassword);
  return chosenPassword;
  }

  //special 

  if (promptLowercase==="NO" && promptUppercase ==="NO" && promptNumbers ==="NO" && promptSpecialCharacters==="YES")

  var confirmPassword = window.confirm('You would like special characters only?');


  if (confirmPassword)
  {
  for (var i=0; i<passwordLength; i++) {
    var randSpecial=specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

    chosenPassword=randSpecial+chosenPassword;
  }
  console.log(chosenPassword);
  return chosenPassword;
  }
}




 // Assignment Code Ending
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






