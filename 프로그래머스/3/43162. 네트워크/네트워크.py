def solution(n, computers):
    answer = 0
    
    visited = [False] * n
    
    
    def dfs(node):
        visited[node] = True
        
        for j in range(len(computers[node])):
            if not visited[j] and computers[node][j] == 1:
                dfs(j)
    
    for i in range(0, n):
        if not visited[i]:
            answer += 1
            dfs(i)
    
    return answer