from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    dy = [1, -1, 0, 0]
    dx = [0, 0, 1, -1]
    dist = [[0] * m for _ in range(n)]
    
    queue = deque()
    queue.append((0, 0))
    dist[0][0] = 1
    
    while queue:
        y, x = queue.popleft()
        
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            
            if 0<=ny<n and 0<=nx<m and maps[ny][nx] == 1 and dist[ny][nx] == 0:
                dist[ny][nx] = dist[y][x] + 1
                if ny == n-1 and nx == m-1:
                    return dist[ny][nx]
                queue.append((ny,nx))
    
    return -1