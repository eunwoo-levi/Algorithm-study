const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim();

let weight = Number(input);

function solution() {
  let count = 0;
  while (weight >= 0) {
    if (weight % 5 === 0) {
      count += weight / 5;
      console.log(count);
      return;
    }
    weight -= 3;
    count++;
  }
  console.log(-1);
}

solution();
