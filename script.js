
// Assignment code here
var chosenPassword="";

function GeneratePassword () {
  var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var numbers = [1,2,3,4,5,6,7,8,9,0];

  var specialCharacters = ['!','@','#','$','%','^','&','*'];




//prompt for how many characters. Second var turns it into a number from a string
var promptNumberOfCharacters=window.prompt ('How many characters would you like in your password? Please type a number between 8 and 128');

var NumberOfCharacters=parseInt(promptNumberOfCharacters,10);


//question prompts
var promptLowercase =window.prompt('Would you like Lowercase letters in your password? Enter "YES" or "NO" to choose.');

var promptUppercase =window.prompt('Would you like Uppercase letters in your password? Enter "YES" or "NO" to choose.');

var promptNumbers =window.prompt('Would you like Numbers in your password? Enter "YES" or "NO" to choose.');

var promptSpecialCharacters=window.prompt('Would you like Special Characters in your password? Enter "YES" or "NO" to choose');


// lowercase only 
if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers === "NO" && promptSpecialCharacters==="NO")

{

for (var i=0;i<NumberOfCharacters;i++){
  var randLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];

  chosenPassword=randLowercase+chosenPassword
}

console.log(chosenPassword);

return chosenPassword;

}



//lower case and uppercase only
var LowerUpper = lowercase.concat(uppercase);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers === "NO" && promptSpecialCharacters==="NO")

{

  for (var i=0; i<NumberOfCharacters;i++){
   var randLowerUpper = LowerUpper[Math.floor(Math.random() *LowerUpper.length)];

   chosenPassword=randLowerUpper+chosenPassword
  }

    console.log(chosenPassword); 

    return chosenPassword

}


//lower case, uppercase and numbers 
var LowerUpperNum = LowerUpper.concat(numbers);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters==="NO")

{
  for (var i=0; i<NumberOfCharacters; i++){
    var randLowerUpperNum = LowerUpperNum[Math.floor(Math.random()*LowerUpperNum.length)];

    chosenPassword=randLowerUpperNum+chosenPassword
  }

    console.log(chosenPassword);

    return chosenPassword;
  
}

//lowercase, uppercase, numbers, and special characters 
  var LowerUpperNumSpecial = LowerUpperNum.concat(specialCharacters);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters==="YES")

{
  for (var i=0; i<NumberOfCharacters; i++) {
    var randLowerUpperNumSpecial = LowerUpperNumSpecial[Math.floor(Math.random()*LowerUpperNumSpecial.length)];

    chosenPassword=randLowerUpperNumSpecial+chosenPassword
  }

    console.log(chosenPassword);

    return chosenPassword;

  }
  //lowercase, numbers

  var LowerNum = lowercase.concat(numbers);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="YES" && promptSpecialCharacters ==="NO")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randLowerNum= LowerNum[Math.floor(Math.random()*LowerNum.length)];

      chosenPassword=randLowerNum+chosenPassword;
    }

      console.log(chosenPassword);

      return chosenPassword;
  
  }


    
  //lowercase, numbers, special

  var LowerNumSpecial =LowerNum.concat(specialCharacters);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="YES" && promptSpecialCharacters ==="YES")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randLowerNumSpecial =LowerNumSpecial[Math.floor(Math.random()*LowerNumSpecial.length)];

      chosenPassword=randLowerNumSpecial+chosenPassword;
    }
  console.log(chosenPassword);

  return chosenPassword;
  
}


  //lowercase, special

  var LowerSpecial = lowercase.concat(specialCharacters);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="NO" && promptSpecialCharacters ==="YES")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randLowerSpecial= LowerSpecial[Math.floor(Math.random()*LowerSpecial.length)];

    chosenPassword=randLowerSpecial+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;

  }

  //lowercase, uppercase, special
  
  var LowerUpperSpecial = LowerUpper.concat(specialCharacters);

  if (promptLowercase==="YES" && promptUppercase ==="YES" && promptNumbers =="NO" && promptSpecialCharacters ==="YES")
{
  for (var i=0;i<NumberOfCharacters; i++) {
  var randLowerUpperSpecial = LowerUpperSpecial[Math.floor(Math.random()*LowerUpperSpecial.length)];

  chosenPassword=randLowerUpperSpecial+chosenPassword;
  }

  console.log(chosenPassword);

  return chosenPassword;

}

  //uppercase

  if (promptLowercase ==="NO" && promptUppercase ==="YES" && promptNumbers =="NO" && promptSpecialCharacters ==="NO")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randUppercase =uppercase[Math.floor(Math.random()*uppercase.length)];

      chosenPassword=randUppercase+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;

  }

  
  //uppercase, numbers

  var UpperNumbers= uppercase.concat(numbers);

  if (promptLowercase ==="NO" && promptUppercase ==="YES" && promptNumbers =="YES" && promptSpecialCharacters ==="NO")
  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randUpperNumbers= UpperNumbers[Math.floor(Math.random()*UpperNumbers.length)];

      chosenPassword=randUpperNumbers+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;
  }


  //uppercase, numbers, special

  var UpperNumSpecial=UpperNumbers.concat(specialCharacters);

  if (promptLowercase==="NO" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters ==="YES")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randUpperNumSpecial= UpperNumSpecial[Math.floor(Math.random()*UpperNumSpecial.length)];

      chosenPassword=randUpperNumSpecial+chosenPassword;
    }

    console.log(chosenPassword);

    return chosenPassword;
  }

  //uppercase, special

  var UpperSpecial=uppercase.concat(specialCharacters);

  if (promptLowercase==="NO" && promptUppercase ==="YES" && promptNumbers ==="NO" && promptSpecialCharacters ==="YES")

  {
  for (var i=0; i<NumberOfCharacters; i++) {
    var randUpperSpecial= UpperSpecial[Math.floor(Math.random()*UpperSpecial.length)];

    chosenPassword=randUpperSpecial+chosenPassword;

  }
  

  console.log(chosenPassword);

  return chosenPassword;
}

  //numbers, special

  var NumSpecial=numbers.concat(specialCharacters);

  if (promptLowercase==="NO" && promptUppercase==="NO" && promptNumbers ==="YES" && promptSpecialCharacters==="YES")

  {
  
  for (var i=0; i<NumberOfCharacters; i++) {
    var randNumSpecial=NumSpecial[Math.floor(Math.random()*NumSpecial.length)];

    chosenPassword=randNumSpecial+chosenPassword;
  }
  console.log(chosenPassword);
  return chosenPassword;
  }

  //special 

  if (promptLowercase==="NO" && promptUppercase ==="NO" && promptNumbers ==="NO" && promptSpecialCharacters==="YES")
{
  for (var i=0; i<NumberOfCharacters; i++) {
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






