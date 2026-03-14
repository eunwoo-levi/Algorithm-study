from collections import deque

def solution(priorities, location):
    answer = 0
    queue = deque()
    
    for i, priority in enumerate(priorities):
        queue.append((priority, i))
        
    
    while(queue):
        priority, i = queue.popleft()
        flag = False
        for p, _ in queue:
            if(priority < p):
                flag = True
                break
                        
        if flag == True:
            queue.append((priority, i))
        else:
            answer += 1
            if i == location:
                return answer
    
    return answer