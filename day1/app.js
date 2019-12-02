const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day1/data.txt'),
    //output: process.stdout,
    console: false
});
const getFuel = (i) => {
   let fuel = Math.floor(i/3) - 2
    let fuelWheight = fuel;
   while(fuelWheight >= 0){
    let x = Math.floor(fuelWheight/3) - 2
    if(x > 0){
   fuel += x;
    }
    fuelWheight = x
   }

   return fuel
}


let total = 0
readInterface.on('line', function(line) {
   // console.log(line);
    total += getFuel(line)
   console.log(total);
});    


// console.log(getFuel(12))
// console.log(getFuel(14))
// console.log(getFuel(1969))
// console.log(getFuel(100756))