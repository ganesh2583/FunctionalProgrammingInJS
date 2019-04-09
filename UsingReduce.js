let orders = [
  { amount: 250 },
  { amount: 150 },
  { amount: 350 },
  { amount: 550 },
  { amount: 750 },
  { amount: 50 }
];

let sumOfAmounts = 0;

for (let index = 0; index < orders.length; index++) {
  const element = orders[index];
  sumOfAmounts += element.amount;
}

console.log("Sum of amounts (Using age old for loop)", sumOfAmounts);

let sumOfAmountsUsingReduce = orders.reduce((previosSum, order) => {
  return previosSum + order.amount;
}, 0);

console.log("Sum of amounts (Using reduce)", sumOfAmountsUsingReduce);

let initialAmount = 0;
let sumOfAmountsUsingMap = orders.map(order => {
  initialAmount = initialAmount + order.amount;
  return order.amount;
});

console.log("Sum of amounts (Using map)", sumOfAmountsUsingMap);
console.log("Sum of amounts (Using map)", initialAmount);
