def solution(queue1, queue2):
    answer = 0
    queue = queue1 + queue2
    total = sum(queue) 
    if total % 2 != 0:
        return -1
    target = total // 2
    
    l = 0
    r = len(queue1) - 1
    cur = sum(queue1)
    
    while r < len(queue):
        if cur == target:
            return answer
        
        if cur > target:
            cur -= queue[l]
            l += 1
        else:
            r += 1
            if r >= len(queue):
                return -1
            cur += queue[r]
        
        answer += 1
        
    return -1