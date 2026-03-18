from collections import deque

dy = [1, -1, 0, 0]
dx = [0, 0, 1, -1]
def solution(rectangle, characterX, characterY, itemX, itemY):
    board = [[0] * 102 for _ in range(102)]
    visited = [[False] * 102 for _ in range(102)]
    
    # 1. 사각형 전체 영역 채우기 (좌표 2배)
    for x1, y1, x2, y2 in rectangle:
        x1 *= 2
        y1 *= 2
        x2 *= 2
        y2 *= 2
        
        for i in range(y1, y2+1):
            for j in range(x1, x2+1):
                board[i][j] = 1
    
    # 2. 사각형 내부 제거 -> 테두리만 남기기
    for x1, y1, x2, y2 in rectangle:
        x1 *= 2
        y1 *= 2
        x2 *= 2
        y2 *= 2

        for i in range(y1 + 1, y2):
            for j in range(x1 + 1, x2):
                board[i][j] = 0
    
    # 3. BFS
    start_x = characterX * 2
    start_y = characterY * 2
    target_x = itemX * 2
    target_y = itemY * 2
    
    queue = deque()
    queue.append((start_y, start_x, 0))
    visited[start_y][start_x] = True
    
    while(queue):
        y, x, cnt = queue.popleft()
        
        if y == target_y and x == target_x:
            return cnt // 2
        
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            
            if 0 <= ny < 102 and 0 <= nx < 102 and not visited[ny][nx] and board[ny][nx] == 1:
                visited[ny][nx] = True
                queue.append((ny,nx, cnt + 1))
        
    
    return -1