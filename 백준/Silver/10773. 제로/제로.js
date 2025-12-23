const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];

function solution() {
  let res = 0;
  const stack = [];

  for (let i = 1; i <= n; i++) {
    if (input[i] === 0) {
      stack.pop();
      continue;
    }
    stack.push(input[i]);
  }

  for (let i = 0; i < stack.length; i++) {
    res += stack[i];
  }

  return res;
}

console.log(solution());
