dy = [1, -1, 0, 0]
dx = [0, 0, 1, -1]

from collections import deque

def solution(places):
    answer = []
    
    for place in places:
        valid = True
        for y in range(5):
            if not valid:
                break
            for x in range(5):
                if place[y][x] == 'P':
                    if not bfs(place, y, x):
                        valid = False
                        answer.append(0)
                        break
        
        if valid:
            answer.append(1)
    
    return answer

def bfs(place, y, x):
    dist = [[-1] * 5 for _ in range(5)]
    
    queue = deque()
    queue.append((y, x))
    dist[y][x] = 0
    
    while queue:
        y, x = queue.popleft()
        
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            
            
            if 0<=ny<5 and 0<=nx<5 and place[ny][nx] != 'X' and dist[ny][nx] == -1:
                nd = dist[y][x] + 1
                if place[ny][nx] == 'P' and nd <= 2:
                    return False
                
                dist[ny][nx] = nd
                queue.append((ny, nx))
        
    return True