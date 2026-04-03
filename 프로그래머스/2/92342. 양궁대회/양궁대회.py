def solution(n, info):
    answer = []
    max_score = -1
    
    def dfs(cur, arrow, idx):
        nonlocal answer, max_score
        
        if idx == 11 or arrow == 0:
            temp = cur[:]
            if arrow > 0:
                temp[10] += arrow
            
            result = cal_score(info, temp)
            if result > 0 and max_score < result:
                max_score = result
                answer = temp[:]
            elif result > 0 and max_score == result:
                if temp[::-1] > answer[::-1]:
                    answer = temp[:]
            return
                
        need = info[idx] + 1
        
        if arrow >= need:
            cur[idx] = need
            dfs(cur, arrow - need, idx + 1)
            cur[idx] = 0
        
        dfs(cur, arrow, idx + 1)
        
    dfs([0] * 11, n, 0) 
    
    return answer if max_score > -1 else [-1]

def cal_score(apeach, ryan):
    a = 0
    r = 0
    
    for i in range(len(apeach)):
        if apeach[i] == 0 and ryan[i] == 0:
            continue
            
        if apeach[i] >= ryan[i]:
            a += 10 - i
        else:
            r += 10 - i
    
    return r - a