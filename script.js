// DOM Elements
var generatedEl = document.getElementById("generated")
var resultEl = document.getElementById("password")
var lengthEl = document.getElementById("length")
var uppercaseEl = document.getElementById("uppercase")
var lowercaseEl = document.getElementById("lowercase")
var numbersEl = document.getElementById("numbers")
var symbolsEl = document.getElementById("symbols")


var randomFunc ={
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate Event Listen
generatedEl.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatedPassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
})

// generate Password Function
function generatedPassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";

    var typesCount = upper + lower + number + symbol;

    //console.log("typesCount: ", typesCount);

    var typesArr = [{ upper }, { lower }, { number }, { symbol }].filter 
    (
        item => Object.values(item)[0]
    );

    //console.log("typesArr: ", typesArr)

    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log("funcName: ", funcName)

            generatedPassword += randomFunc[funcName]();
        });
    }
    var finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// Generator Functio -Http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
  }
  
  function getRandomSymbol() {
    var symbols = ",./<>?;'[]{}=-+_)(*&^%$#@!";
    return symbols [Math.floor(Math.random() * symbols.length)];
  }