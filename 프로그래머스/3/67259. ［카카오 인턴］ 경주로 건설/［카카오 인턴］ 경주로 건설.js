function solution(board) {
  const n = board.length;
  const INF = 1e15;

  // 0: up, 1: right, 2: down, 3: left
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  const dist = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(4).fill(INF))
  );

  const q = [];
  let head = 0;

  // 시작점에서 "이전 방향 없음"을 처리하려고 보통 우/하 두 개로 시작 (대칭)
  // (0,0)에서 첫 이동은 코너 개념이 없으니 100만 더해짐.
  // 그래서 시작 상태를 2개 넣는 게 편함.
  q.push([0, 0, 1, 0]); // dir = right
  q.push([0, 0, 2, 0]); // dir = down

  while (head < q.length) {
    const [y, x, dir, cost] = q[head++];

    for (let nd = 0; nd < 4; nd++) {
      const ny = y + dy[nd];
      const nx = x + dx[nd];

      if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
      if (board[ny][nx] === 1) continue;

      const add = (dir === nd) ? 100 : 600;
      const ncost = cost + add;

      if (dist[ny][nx][nd] > ncost) {
        dist[ny][nx][nd] = ncost;
        q.push([ny, nx, nd, ncost]);
      }
    }
  }

  return Math.min(...dist[n - 1][n - 1]);
}
