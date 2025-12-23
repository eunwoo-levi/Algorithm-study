const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim();

function solution() {
  const croatias = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  let s = input;

  for (const croatia of croatias) {
    while (s.includes(croatia)) {
      s = s.replace(croatia, 'a');
    }
  }

  return s.length;
}

console.log(solution());
