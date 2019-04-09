let isEvenNumber = value => {
  console.log(`${value} is an even number`);
};

let isOddNumber = value => {
  console.log(`${value} is an odd number`);
};

let evenOddService = (value, evenCallback, oddCallback) => {
  return new Promise((resolve, reject) => {
    if (value % 2 === 0) {
      resolve(() => evenCallback(value));
    } else {
      resolve(() => oddCallback(value));
    }
    reject(() => {
      console.log("Error occured in calculatin");
    });
  });
};

console.log("This prints first");
evenOddService(2, isEvenNumber, isOddNumber)
  .then(res => {
    res();
  })
  .catch(err => {
    console.log("err", err);
  });
evenOddService(3, isEvenNumber, isOddNumber)
  .then(res => {
    res();
  })
  .catch(err => {
    err();
  });
console.log("This prints last");
