const csv = require('csv-parser')
const fs = require('fs')
const results = [];
let arrayl = [];
let arrayc = [];
let arrays = [];

arrayl[0] = "January";
arrayc[0] = "Feburary";
arrays[0] = "March";

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for(let i = 0; i<4;i++){
        arrayl[i+1] = results[i].Loan;
        arrayc[i+1] = results[i].Checking;
        arrays[i+1] = results[i].Savings;

    }
    console.log(arrayl);
    console.log(arrayc);
    console.log(arrays);
});
