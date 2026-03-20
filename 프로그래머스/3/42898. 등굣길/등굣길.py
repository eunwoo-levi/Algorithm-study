def solution(m, n, puddles):
    dp = [[0] * (m+1) for _ in range(n+1)]
    blocked = [[False] * (m+1) for _ in range(n+1)]
    dp[1][1] = 1
    
    for p in puddles:
        x, y = p
        blocked[y][x] = True
    
    for i in range(1, n+1):
        for j in range(1, m+1):
            if i == 1 and j == 1:
                continue
            if blocked[i][j]:
                continue
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1_000_000_007
    
    return dp[n][m]