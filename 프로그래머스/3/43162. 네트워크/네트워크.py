def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    def dfs(node):
        visited[node] = True
        
        for computer in computers[node]:
            for c in range(n):
                if not visited[c] and computers[node][c] == 1:
                    dfs(c)
         
    for i in range(n):
        if not visited[i]:
            answer += 1
            dfs(i)
        
    
    return answer