from collections import deque
dy = [1,-1,0,-0]
dx = [0,0,1,-1]

def solution(maps):
    N = len(maps)
    M = len(maps[0])
    
    queue = deque()
    visited = [[False]*M for _ in range(N)]
        
    queue.append((0, 0, 1))
    visited[0][0] = True
    
    while(queue):
        y, x, count = queue.popleft()
        
        if y == N-1 and x == M-1:
            return count
        
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            
            if 0 <= ny < N and 0 <= nx < M and not visited[ny][nx] and maps[ny][nx] == 1:
                visited[ny][nx] = True
                queue.append((ny, nx, count + 1))
    
    
    return -1