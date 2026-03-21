# 첫번째 뜯으면 -> 마지막 못 뜯음  /  첫 뜯지않으면 -> 마지막 뜯음
# 점화식: dp[i] = max(dp[i-1], dp[i-2] + arr[i])
def solution(sticker):
    n = len(sticker)
    
    if n == 1:
        return sticker[0]
    
    # 1. 첫 번째 스티커를 뜯는 경우 -> 마지막은 제외
    dp1 = [0] * n
    dp1[0] = sticker[0]
    dp1[1] = max(sticker[0], sticker[1])
    
    for i in range(2, n - 1):  # 마지막 전까지만
        dp1[i] = max(dp1[i - 1], dp1[i - 2] + sticker[i])
    
    # 2. 첫 번째 스티커를 안 뜯는 경우 -> 마지막 포함 가능
    dp2 = [0] * n
    dp2[0] = 0
    dp2[1] = sticker[1]
    
    for i in range(2, n):
        dp2[i] = max(dp2[i - 1], dp2[i - 2] + sticker[i])
    
    return max(dp1[n - 2], dp2[n - 1])