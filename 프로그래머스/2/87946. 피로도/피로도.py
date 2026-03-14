def solution(k, dungeons):
    answer = -1
    visited = [False] * len(dungeons)
    
    def dfs(hp, count):
        nonlocal answer
        answer = max(answer, count)
        
        for i in range(len(dungeons)):
            need, cost = dungeons[i]
            
            if not visited[i] and hp >= need:
                visited[i] = True
                dfs(hp - cost, count + 1)
                visited[i] = False
            
    dfs(k, 0)
        
    return answer