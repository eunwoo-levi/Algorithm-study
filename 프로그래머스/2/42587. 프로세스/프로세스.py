from collections import deque

def solution(priorities, location):
    queue = deque()
    
    for i, p in enumerate(priorities):
        queue.append((i, p))
    
    cnt = 0
    while queue:
        idx, p = queue.popleft()
        
        flag = False
        for idx_2, p_2 in queue:
            if p_2 > p:
                flag = True
                queue.append((idx, p))
                break
        
        if flag == False:
            cnt += 1
            if idx == location:
                return cnt
        
        
    
    return 0