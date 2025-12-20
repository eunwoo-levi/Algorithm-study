const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M, V] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

function solution(input) {
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 0; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsVisited = Array(N + 1).fill(false);
  const dfsOrder = [];

  dfs(V, dfsVisited, dfsOrder);
  const bfsOrder = bfs(V);

  console.log(dfsOrder.join(' '));
  console.log(bfsOrder.join(' '));
}

function dfs(v, dfsVisited, dfsOrder) {
  dfsOrder.push(v);
  dfsVisited[v] = true;

  for (const next of graph[v]) {
    if (!dfsVisited[next]) dfs(next, dfsVisited, dfsOrder);
  }
}

function bfs(v) {
  const bfsVisited = Array(N + 1).fill(false);
  const bfsOrder = [];
  const queue = [v];
  bfsVisited[v] = true;
  while (queue.length) {
    const node = queue.shift();
    bfsOrder.push(node);
    for (const next of graph[node]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }

  return bfsOrder;
}

solution(input);
