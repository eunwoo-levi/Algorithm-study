function solution(triangle) {
  const n = triangle.length;
  const dp = new Array(n).fill(0);
  dp[0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (j === i) dp[j] = dp[j - 1] + triangle[i][j];
      else if (j === 0) dp[j] = dp[j] + triangle[i][j];
      else dp[j] = Math.max(dp[j - 1], dp[j]) + triangle[i][j];
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > ans) ans = dp[i];
  }
  return ans;
}
