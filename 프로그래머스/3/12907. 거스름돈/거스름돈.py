def solution(n, money):
    MOD = 1000000007
    
    dp = [0] * (n + 1)
    dp[0] = 1

    for coin in money:
        for price in range(coin, n + 1):
            dp[price] = (dp[price] + dp[price - coin]) % MOD

    return dp[n]

# dp[price] = (dp[price] + dp[price - coin]) % MOD 설명
# coin = 2인 경우, dp[5]는 dp[5] + dp[3] 이다.
# 왜냐하면 3원을 만드는 모든 방법 뒤에 2원 동전 하나를 붙이면 5원을 만들 수 있기 때문이다.

# 즉, dp[3]에 저장된 경우의 수만큼 5원을 만드는 새로운 방법이 생긴다.

# 그래서 안쪽 for문을
# for price in range(coin, n + 1):
# 로 도는 이유는,
# 현재 동전 coin을 사용해서 coin원부터 n원까지 만들 수 있는 경우의 수를
# 차례대로 dp에 누적하기 위해서이다.