const fs = require('fs');
const input = fs.readFileSync('day2.txt')    
  .toString()
  .split('\n')
  .map(row => row.split(' ').filter(char => char !== ''))
  .filter(row => row.length > 0);
const checkSum1 = () => input.reduce((sum, row) => sum + (Math.max(...row) - Math.min(...row)), 0);
console.log(checkSum1());

const checkSum2 = () => {
  let sum = 0;
  input.forEach(row => {
    for (let x = 0; x < row.length; x++) {
      for (let y = 0; y < row.length; y++) {
        if (row[x] === row[y]) continue;
        const div = row[x] / row[y];
        if (Number.isInteger(div)) {
          sum += div;
          break;
        }
      }
    }
  });
  return sum;
}

console.log(checkSum2());
