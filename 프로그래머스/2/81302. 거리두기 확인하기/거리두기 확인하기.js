// 거리가 2이하면 안됌.
// P: 응시자 , O: 빈 테이블, X: 파티션(block)
// P 있는 곳에서 매번 BFS (거리 2까지만 탐색)

function solution(places) {
  const answer = [];

  for (const place of places) {
    let valid = 1;

    for (let i = 0; i < 5 && valid; i++) {
      for (let j = 0; j < 5 && valid; j++) {
        if (place[i][j] === 'P') {
          if (!bfs(i, j, place)) {
            valid = 0;
          }
        }
      }
    }

    answer.push(valid);
  }

  return answer;
}

function bfs(y, x, place) {
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];

  const visited = Array.from({ length: 5 }, () =>
    Array(5).fill(false)
  );

  const queue = [[y, x, 0]];
  visited[y][x] = true;

  while (queue.length) {
    const [cy, cx, dist] = queue.shift();

    if (dist >= 2) continue;

    for (let d = 0; d < 4; d++) {
      const ny = cy + dy[d];
      const nx = cx + dx[d];

      if (ny < 0 || nx < 0 || ny >= 5 || nx >= 5) continue;
      if (visited[ny][nx]) continue;
      if (place[ny][nx] === 'X') continue;

      visited[ny][nx] = true;

      if (place[ny][nx] === 'P') return false;

      queue.push([ny, nx, dist + 1]);
    }
  }

  return true;
}
