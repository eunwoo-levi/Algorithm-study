def solution(triangle):
    answer = 0
    N = len(triangle)
    dp = [[0] * N for _ in range(N)]
    dp[0][0] = triangle[0][0]

    
    for i in range(1, N):
        for j in range(len(triangle[i])):
            if j==0:
                dp[i][0] = dp[i-1][0] + triangle[i][j]
            elif i==j:
                dp[i][j] = dp[i-1][i-1] + triangle[i][j]
            else:
                dp[i][j] = max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
    
    return max(dp[N-1][:])