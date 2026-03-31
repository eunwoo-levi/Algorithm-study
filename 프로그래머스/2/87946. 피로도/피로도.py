def solution(k, dungeons):
    answer = 0
    N = len(dungeons)
    visited = [False] * N
    
    def dfs(hp, cnt):
        nonlocal answer
        answer = max(answer, cnt)
                
        for i in range(N):
            need, cost = dungeons[i]
            if not visited[i] and hp >= need:
                visited[i] = True
                dfs(hp - cost, cnt + 1)
                visited[i] = False
                
    dfs(k, 0)
    
    return answer