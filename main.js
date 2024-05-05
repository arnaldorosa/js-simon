function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
  
function askForNumbers(num) {
    for (let i = 0; i < num; i++) {
      userNum = parseInt(prompt("Inserisci i numeri mostrati poco fa"));
      userNums.push(userNum);
    }
}
  
  
function showTheComparison() {
    for (let i = 0; i < userNums.length; i++) {
      if (userNums.includes(randomNums[i])) {
      equalNums.push(randomNums[i]);
    }
}
  
    if (equalNums.length !== 0) {
      outputDOMElement.innerHTML = "I numeri indovinati sono ${equalNums.length} e sono ${equalNums}";
    } else {
      outputDOMElement.innerHTML = "Non hai indovinato nessun numero";
    }
}
  
  
function createArrayOfRandomNums(array, num) {
      while (array.length < num) {
      const randomNum = getRandomInt(1, 100);
      if (array.includes(randomNum) === false) {
      array.push(randomNum);
      }
    }
}
  
  
function startGame() {
    count--;
    timerDOMElement.innerHTML = count;
    if(count <= 10) {
      timerDOMElement.classList.add("clr-red");
    }
    if (count === 0) {
      clearInterval(timer);
      askForNumbers(5);
      randomNumDOMElement.innerHTML = `${randomNums}`;
      userNumDOMElement.innerHTML = `${userNums}`;
      showTheComparison();
    }
}
  
  
  
const timerDOMElement = document.getElementById("countdown");
const randomNumDOMElement = document.getElementById("random-numbers");
const userNumDOMElement = document.getElementById("user-numbers");
const outputDOMElement = document.getElementById("output");
const randomNums = [];
const userNums = [];
const equalNums = [];
let userNum;
let count = 30;
timerDOMElement.innerHTML = count;
createArrayOfRandomNums(randomNums, 5);
alert(`Memorizza questi numeri : ${randomNums}`);
const timer = setInterval(startGame, 1000);