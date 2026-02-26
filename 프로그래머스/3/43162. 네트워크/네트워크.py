def solution(n, computers):
    answer = 0
    
    visited = [False] * n
    
    def dfs(idx):
        visited[idx] = True
        
        for i in range(n):
            if visited[i] == False and computers[idx][i] == 1:
                dfs(i)
    
    for i in range(n):
        if visited[i] == False:
            answer += 1
            dfs(i)
    
    return answer