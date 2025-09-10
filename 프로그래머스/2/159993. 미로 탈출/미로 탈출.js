function solution(maps) {
  const n = maps.length, m = maps[0].length;
  const ny = [1, 0, -1, 0], nx = [0, 1, 0, -1];

  let S, L, E;
  for (let y = 0; y < n; y++) for (let x = 0; x < m; x++) {
    const ch = maps[y][x];
    if (ch === 'S') S = [y, x];
    else if (ch === 'L') L = [y, x];
    else if (ch === 'E') E = [y, x];
  }
  if (!S || !L || !E) return -1;

  const bfs = (sy, sx) => {
    const dist = Array.from({ length: n }, () => Array(m).fill(-1));
    const q = [[sy, sx]];
    dist[sy][sx] = 0;
    for (let h = 0; h < q.length; h++) {
      const [y, x] = q[h];
      for (let d = 0; d < 4; d++) {
        const yy = y + ny[d], xx = x + nx[d];
        if (yy < 0 || yy >= n || xx < 0 || xx >= m) continue;
        if (maps[yy][xx] === 'X' || dist[yy][xx] !== -1) continue;
        dist[yy][xx] = dist[y][x] + 1;
        q.push([yy, xx]);
      }
    }
    return dist;
  };

  const s2l = bfs(S[0], S[1])[L[0]][L[1]];
  if (s2l === -1) return -1;
  const l2e = bfs(L[0], L[1])[E[0]][E[1]];
  return l2e === -1 ? -1 : s2l + l2e;
}
