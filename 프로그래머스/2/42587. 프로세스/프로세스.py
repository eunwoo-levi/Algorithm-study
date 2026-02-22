from collections import deque

def solution(priorities, location):
    answer = 0
    queue = deque([p, i] for i, p in enumerate(priorities))
    
    while queue:
        current = queue.popleft()
        
        # 현재 프로세스보다 높은 우선순위가 뒤에 존재
        if any(current[0] < q[0] for q in queue):
            queue.append(current)
        else:
            answer += 1;
            if(current[1] == location):
                return answer
            
        
    return answer