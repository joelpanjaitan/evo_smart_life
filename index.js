let input1 = [
  "1 book at 12.49",
  "1 music CD at 14.99",
  "1 chocolate bar at 0.85",
];

let input2 = [
  "1 imported box of chocolates at 10.00",
  "1 imported bottle of perfume at 47.50",
];

let input3 = [
  "1 imported bottle of perfume at 27.99",
  "1 bottle of perfume at 18.99",
  "1 packet of headache pills at 9.75",
  "1 box of imported chocolates at 11.25",
];

var result = [];
var temp = [];
var non;
var total = [];
var newtotal = 0;
var number;
var tax = 0;
var finaltax = 0;
let reducer;
const onereceipt = (arr) => {
  arr.forEach((x) => {
    temp.push(x.split(" "));
  });
  for (let o = 0; o < temp.length; o++) {
    for (let j = 0; j < temp[o].length; j++) {
      if (temp[o][j] === "at") {
        temp[o][j] = ":";
      }
      if (temp[o][j] === "music") {
        tax += 10;
      }
      if (temp[o][j] === "perfume") {
        tax += 10;
      }
      if (temp[o][j] === "imported") {
        tax += 5;
      }
    }
    finaltax +=
      Math.ceil((Number(temp[o][temp[o].length - 1] * tax) / 100) * 20) / 20;
    tax = (
      Math.ceil((Number(temp[o][temp[o].length - 1] * tax) / 100) * 20) / 20
    ).toFixed(2);
    temp[o][temp[o].length - 1] = (
      ((Number(temp[o][temp[o].length - 1]) + Number(tax)) * 20) /
      20
    ).toFixed(2);
    tax = 0;

    number = temp[o][temp[o].length - 1];
    total.push(Number(number));
    tax = Math.ceil(tax * 20) / 20;
    reducer = (accumulator, curr) => accumulator + curr;
    newtotal = total.reduce(reducer) + tax;
    non = temp[o].join(" ");
    result.push(non);
  }
  result.map((x) => {
    console.log(x);
  });
  console.log("Sales Taxes: " + finaltax.toFixed(2), "\n");
  console.log("Total: " + newtotal.toFixed(2));
};

console.log(onereceipt(input1));
// console.log(onereceipt(input2));
// console.log(onereceipt(input3));
