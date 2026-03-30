def solution(board, skill):
    N = len(board)
    M = len(board[0])
    
    # 누적합 기록용 배열
    diff = [[0] * (M + 1) for _ in range(N + 1)]
    
    # 스킬 정보 기록
    for t, y1, x1, y2, x2, d in skill:
        if t == 1:   # 공격
            val = -d
        else:        # 회복
            val = d
        
        diff[y1][x1] += val
        diff[y1][x2 + 1] -= val
        diff[y2 + 1][x1] -= val
        diff[y2 + 1][x2 + 1] += val
    
    # 가로 누적합
    for y in range(N + 1):
        for x in range(1, M + 1):
            diff[y][x] += diff[y][x - 1]
    
    # 세로 누적합
    for x in range(M + 1):
        for y in range(1, N + 1):
            diff[y][x] += diff[y - 1][x]
    
    # 최종적으로 살아남은 건물 개수 세기
    answer = 0
    for y in range(N):
        for x in range(M):
            if board[y][x] + diff[y][x] >= 1:
                answer += 1
    
    return answer