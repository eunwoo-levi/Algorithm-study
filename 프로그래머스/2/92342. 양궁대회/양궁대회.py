def solution(n, info):
    max_diff = -1
    answer = [-1]
    
    def dfs(idx, arrows_left, lion):
        nonlocal max_diff, answer
        
        # 끝까지 탐색했으면 점수 계산
        if idx == 11:
            if arrows_left > 0:
                lion[10] += arrows_left  # 남은 화살 0점에 몰아주기
            
            lion_score = 0
            apeach_score = 0
            
            for i in range(11):
                if lion[i] == 0 and info[i] == 0:
                    continue
                if lion[i] > info[i]:
                    lion_score += (10 - i)
                else:
                    apeach_score += (10 - i)
            
            diff = lion_score - apeach_score
            
            if diff > 0:
                if diff > max_diff:
                    max_diff = diff
                    answer = lion[:]
                elif diff == max_diff:
                    # 낮은 점수 더 많이 쏜 경우 선택
                    for i in range(10, -1, -1):
                        if lion[i] > answer[i]:
                            answer = lion[:]
                            break
                        elif lion[i] < answer[i]:
                            break
            
            if arrows_left > 0:
                lion[10] -= arrows_left
            return
        
        # 1️⃣ 이 점수 이기기
        need = info[idx] + 1
        if arrows_left >= need:
            lion[idx] = need
            dfs(idx + 1, arrows_left - need, lion)
            lion[idx] = 0
        
        # 2️⃣ 포기하기
        dfs(idx + 1, arrows_left, lion)
    
    dfs(0, n, [0] * 11)
    
    return answer