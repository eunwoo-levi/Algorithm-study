def solution(tickets):
    N = len(tickets)
    visited = [False] * N
    answer = []
    
    def dfs(cur, path, count):
        if count == N:
            answer.append(path[:])
            return
        
        for i in range(N):
            start, end = tickets[i]
            if not visited[i] and start == cur:
                visited[i] = True
                path.append(end)
                dfs(end, path, count + 1)
                path.pop()
                visited[i] = False
    
    dfs("ICN", ["ICN"], 0)
    answer.sort()
    return answer[0]