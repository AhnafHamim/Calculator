let firstTerm = 0;
let secondTerm = 0;
let buttons = document.querySelector(".buttons");

let operation = 2;

class opNum {
  constructor(operation, number) {
    this.operation = operation;
    this.number = number;
  }
}
let input = 0;

let clear = () => {
  answerDisplay.innerText = "";
};

let numbers = [new opNum(2, 0)];

let ac = document.querySelector("#AC");
let answerDisplay = document.querySelector(".answer-display-text");
ac.addEventListener("click", () => {
  clear();
  input = 0;
  operation = 2;
  numbers = [];
});

let c = document.querySelector("#C");
c.addEventListener("click", () => {
  answerDisplay.innerText = answerDisplay.innerText.slice(0, -1);
  input/=10;
});

let one = document.querySelector("#one");
one.addEventListener("click", () => {
  answerDisplay.append("1");
  input = input * 10 + 1;
});

let two = document.querySelector("#two");
two.addEventListener("click", () => {
  answerDisplay.append("2");
  input = input * 10 + 2;
});

let three = document.querySelector("#three");
three.addEventListener("click", () => {
  answerDisplay.append("3");
  input = input * 10 + 3;
});

let four = document.querySelector("#four");
four.addEventListener("click", () => {
  answerDisplay.append("4");
  input = input * 10 + 4;
});

let five = document.querySelector("#five");
five.addEventListener("click", () => {
  answerDisplay.append("5");
  input = input * 10 + 5;
});

let six = document.querySelector("#six");
six.addEventListener("click", () => {
  answerDisplay.append("6");
  input = input * 10 + 6;
});

let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  answerDisplay.append("7");
  input = input * 10 + 7;
});

let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  answerDisplay.append("8");
  input = input * 10 + 8;
});

let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  answerDisplay.append("9");
  input = input * 10 + 9;
});

let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  answerDisplay.append("0");
  input = input * 10;
});

let percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
  answerDisplay.append("%");
  input /= 100;
});

let plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  answerDisplay.append("+");

  numbers.push(new opNum(operation, input));
  operation = 2;
  input = 0;
});

let minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
  answerDisplay.append("-");
  numbers.push(new opNum(operation, input));
  operation = 3;
  input = 0;
});

let multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
  answerDisplay.append("x");
  numbers.push(new opNum(operation, input));
  operation = 0;
  input = 0;
});

let divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
  answerDisplay.append("÷");
  numbers.push(new opNum(operation, input));
  operation = 1;
  input = 0;
});

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  numbers.push(new opNum(operation, input));
  answerDisplay.append("=");
  for (let op = 0; op < 4; op++) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i + 1].operation == op) {
        switch (numbers[i + 1].operation) {
          case 0:
            numbers[i].number = numbers[i].number * numbers[i + 1].number;
            numbers.splice(i + 1, 1);
            i--;
            break;
          case 1:
            numbers[i].number = numbers[i].number / numbers[i + 1].number;
            numbers.splice(i + 1, 1);
            i--;
            break;
          case 2:
            numbers[i].number = numbers[i].number + numbers[i + 1].number;
            numbers.splice(i + 1, 1);
            i--;
            break;
          case 3:
            numbers[i].number = numbers[i].number - numbers[i + 1].number;
            numbers.splice(i + 1, 1);
            i--;
            break;
        }
      }
    }
  }
  if (numbers[0].number == Infinity) {
    answerDisplay.innerText = "Undefined";
  } else {
    answerDisplay.innerText = numbers[0].number;
  }
  input = numbers[0].number;
  numbers = [];
  console.log(input);
  console.log(operation);
  console.log(numbers);
});
