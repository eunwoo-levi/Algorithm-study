function solution(m, n, puddles) {
  const MOD = 1000000007;

  // (n+1) x (m+1) 2D dp
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  const blocked = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

  // puddles: [x, y] (문제에서 x=m, y=n 형태)
  for (const [x, y] of puddles) {
    blocked[y][x] = true;
  }

  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (blocked[i][j]) {
        dp[i][j] = 0;
        continue;
      }

      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
    }
  }

  return dp[n][m];
}
