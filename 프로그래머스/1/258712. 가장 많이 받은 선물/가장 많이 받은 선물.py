def solution(friends, gifts):
    N = len(friends)
    
    history = [[0] * N for _ in range(N)]
    score = [0] * N
    
    idx = {name: i for i, name in enumerate(friends)}

    # 기록
    for g in gifts:
        give, get = g.split()
        
        i = idx[give]
        j = idx[get]
        
        history[i][j] += 1
        score[i] += 1
        score[j] -= 1

    # 다음 달 받을 개수
    result = [0] * N

    for i in range(N):
        for j in range(i + 1, N):
            
            if history[i][j] > history[j][i]:
                result[i] += 1
            
            elif history[i][j] < history[j][i]:
                result[j] += 1
            
            else:
                if score[i] > score[j]:
                    result[i] += 1
                elif score[i] < score[j]:
                    result[j] += 1

    return max(result)