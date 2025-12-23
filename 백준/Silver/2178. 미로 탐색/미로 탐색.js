const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const visited = input.slice(1, 1 + N).map((line) => line.trim().split('').map(Number));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function solution() {
  const queue = [[0, 0]];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && visited[ny][nx] === 1) {
        visited[ny][nx] = visited[y][x] + 1;
        queue.push([ny, nx]);

        if (ny === N - 1 && nx === M - 1) {
          return visited[ny][nx];
        }
      }
    }
  }

  return visited[N - 1][M - 1];
}

console.log(solution());
