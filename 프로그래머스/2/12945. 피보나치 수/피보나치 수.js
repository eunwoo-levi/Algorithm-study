function solution(n) {
    const mod = 1234567;
    let dp = [0, 1, 1];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }

    return dp[n];
}
