def solution(k, dungeons):
    answer = 0
    N = len(dungeons)
    visited = [False] * N
    
    def dfs(k, cnt):
        nonlocal answer
        
        answer = max(answer, cnt)
        
        for i in range(N):
            need, cost = dungeons[i]
            if not visited[i] and k >= need:
                visited[i] = True
                dfs(k - cost, cnt + 1)
                visited[i] = False
                
    dfs(k, 0)
    
    
    return answer