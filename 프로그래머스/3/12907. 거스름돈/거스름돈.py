def solution(n, money):
    MOD = 1000000007
    
    dp = [0] * (n + 1)
    dp[0] = 1

    for coin in money:
        for price in range(coin, n + 1):
            dp[price] = (dp[price] + dp[price - coin]) % MOD

    return dp[n]