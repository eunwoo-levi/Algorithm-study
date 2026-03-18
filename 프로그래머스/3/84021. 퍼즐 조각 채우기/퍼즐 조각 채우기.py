from collections import deque

def solution(game_board, table):
    n = len(game_board)

    def bfs(board, sy, sx, target, visited):
        q = deque([(sy, sx)])
        visited[sy][sx] = True
        cells = [(sy, sx)]

        while q:
            y, x = q.popleft()
            for dy, dx in [(-1,0), (1,0), (0,-1), (0,1)]:
                ny, nx = y + dy, x + dx
                if 0 <= ny < n and 0 <= nx < n:
                    if not visited[ny][nx] and board[ny][nx] == target:
                        visited[ny][nx] = True
                        q.append((ny, nx))
                        cells.append((ny, nx))

        return normalize(cells)

    def normalize(cells):
        min_y = min(y for y, x in cells)
        min_x = min(x for y, x in cells)
        normalized = sorted((y - min_y, x - min_x) for y, x in cells)
        return normalized

    def rotate(shape):
        rotated = [(x, -y) for y, x in shape]
        return normalize(rotated)

    def get_shapes(board, target):
        visited = [[False] * n for _ in range(n)]
        shapes = []

        for i in range(n):
            for j in range(n):
                if board[i][j] == target and not visited[i][j]:
                    shapes.append(bfs(board, i, j, target, visited))

        return shapes

    blanks = get_shapes(game_board, 0)  # 빈칸들
    pieces = get_shapes(table, 1)       # 퍼즐 조각들

    used = [False] * len(pieces)
    answer = 0

    for blank in blanks:
        for i in range(len(pieces)):
            if used[i]:
                continue

            piece = pieces[i]

            if len(blank) != len(piece):
                continue

            matched = False
            for _ in range(4):
                if piece == blank:
                    matched = True
                    break
                piece = rotate(piece)

            if matched:
                used[i] = True
                answer += len(blank)
                break

    return answer