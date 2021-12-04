
// Assignment code here
var chosenPassword="";
function generatePassword () {  // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
}





//Add event listener to generate button



  

// lowercase, uppercase, numbers, and special character arrays
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

console.log(chosenPassword); 



}


//lower case and uppercase only
var LowerUpper = lowercase.concat(uppercase);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers === "NO" && promptSpecialCharacters==="NO")

{

  for (var i=0; i<NumberOfCharacters;i++){
   var randLowerUpper = LowerUpper[Math.floor(Math.random() *LowerUpper.length)];

    console.log(randLowerUpper); }
   

}

//lower case, uppercase and numbers 
var LowerUpperNum = LowerUpper.concat(numbers);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters==="NO")

{
  for (var i=0; i<NumberOfCharacters; i++){
    var randLowerUpperNum = LowerUpperNum[Math.floor(Math.random()*LowerUpperNum.length)];

    console.log(randLowerUpperNum);}
  
}

//lowercase, uppercase, numbers, and special characters 
var LowerUpperNumSpecial = LowerUpperNum.concat(specialCharacters);

if (promptLowercase ==="YES" && promptUppercase ==="YES" && promptNumbers ==="YES" && promptSpecialCharacters==="YES")

{
  for (var i=0; i<NumberOfCharacters; i++) {
    var randLowerUpperNumSpecial = LowerUpperNumSpecial[Math.floor(Math.random()*LowerUpperNumSpecial.length)];

    console.log(randLowerUpperNumSpecial);}

  }
  //lowercase, numbers

  var LowerNum = lowercase.concat(numbers);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="YES" && promptSpecialCharacters ==="NO")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randLowerNum= LowerNum[Math.floor(Math.random()*LowerNum.length)];

      console.log(randLowerNum);}
  
  }


    
  //lowercase, numbers, special

  var LowerNumSpecial =LowerNum.concat(specialCharacters);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="YES" && promptSpecialCharacters ==="YES")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randLowerNumSpecial =LowerNumSpecial[Math.floor(Math.random()*LowerNumSpecial.length)];

      console.log (randLowerNumSpecial);}
    }


  //lowercase, special

  var LowerSpecial = lowercase.concat(specialCharacters);

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="NO" && promptSpecialCharacters ==="YES")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randLowerSpecial= LowerSpecial[Math.floor(Math.random()*LowerSpecial.length)];

      console.log (randLowerSpecial);}
  
    }

    

  //uppercase

  if (promptLowercase ==="YES" && promptUppercase ==="NO" && promptNumbers =="NO" && promptSpecialCharacters ==="NO")

  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randUppercase =uppercase[Math.floor(Math.random()*lowercase.length)];

      console.log (randUppercase);}

    }
  
  //uppercase, numbers

  var UpperNumbers= uppercase.concat(numbers);

  if (promptLowercase ==="NO" && promptUppercase ==="YES" && promptNumbers =="YES" && promptSpecialCharacters ==="NO")
  {
    for (var i=0; i<NumberOfCharacters; i++) {
      var randUpperNumbers= UpperNumbers[Math.floor(Math.random()*UpperNumbers.length)];



      console.log (randUpperNumbers);}

  }
}

  //uppercase, numbers, special

  //uppercase, special

  //numbers, special

  //special 


  //Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  generatePassword();
  //chosenPassword  = document.querySelector("#password").innerHtml;
 
  document.querySelector("#password").innerHtml= chosenPassword;
 
  //passwordText.value = password;
 }

  


