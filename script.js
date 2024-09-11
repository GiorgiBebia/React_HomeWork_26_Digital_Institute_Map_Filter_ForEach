// Homework 1
const increaseButton = document.querySelector(".increaseButton");
let count = 0;

increaseButton.addEventListener("click", function () {
  count++;
  increaseButton.textContent = count;
});

// Homework 2
const deleteThisButton = document.querySelector(".deleteThisButton");

deleteThisButton.addEventListener("click", function () {
  deleteThisButton.remove();
});

// Homework 3
const btnDelete = document.querySelectorAll(".btn-delate");

btnDelete.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  })
);

// Homework 4
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Homework 4.1
const oddArr = numArr.filter((odd) => odd % 2 == 1);

// Homework 4.2
const evenArr = numArr.filter((even) => even % 2 == 0);

// Homework 4.3
const moreTenArray = numArr.filter((moreTen) => moreTen > 10);
const lessFortyFourArray = numArr.filter((lessFortyFour) => lessFortyFour < 44);

// Homework 4.4
const divideFive = numArr.filter((divideFive) => divideFive % 5 == 0);

// Homework 4.5
numArr.forEach((num) => console.log(num));

// Homework 4.6
numArr.forEach((num) => {
  const p = document.createElement("p");
  p.textContent = num;
  document.querySelector("body").appendChild(p);
});
numArr.forEach((num) => {
  const button = document.createElement("button");
  button.textContent = num;
  document.querySelector("body").appendChild(button);
});

// Homework 4.7
numArr.forEach((num) => console.log(num * num));

// Homework 4.8
numArr.forEach((num) => {
  const h2 = document.createElement("h2");
  h2.textContent = `Number is ${num}`;
  document.querySelector("body").appendChild(h2);
});

// Homework 4.9
const square = numArr.map((num) => num * num);
const twiceAsMuch = numArr.map((num) => num * 2);
const moreTenAgain = numArr.map((num) => num + 10);
