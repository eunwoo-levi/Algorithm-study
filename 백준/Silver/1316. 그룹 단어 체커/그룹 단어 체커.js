// ctrl + alt + n 해서 실행

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let result = 0;
  const n = Number(input[0]);

  for (let i = 1; i <= n; i++) {
    const letter = input[i];

    const map = new Map();
    map.set(letter[0], 1);
    let last = letter[0];
    let isGroup = true;

    for (let i = 1; i < letter.length; i++) {
      if (last === letter[i]) continue;

      if (map.has(letter[i])) {
        isGroup = false;
        break;
      }
      map.set(letter[i], 1);
      last = letter[i];
    }

    if (isGroup) result += 1;
  }

  console.log(result);
}

solution(input);
