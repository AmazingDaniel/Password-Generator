// DOM Elements
const generatedEl = document.getElementById("generated")
const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")


const randomFunc ={
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate Event Listen
generatedEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

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

    const typesCount = upper + lower + number + symbol;

    //console.log("typesCount: ", typesCount);

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter 
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
    const finalPassword = generatedPassword.slice(0, length);

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
    const symbols = ",./<>?;'[]{}=-+_)(*&^%$#@!";
    return symbols [Math.floor(Math.random() * symbols.length)];
  }