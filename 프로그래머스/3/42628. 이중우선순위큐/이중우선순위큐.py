from collections import deque

def solution(operations):
    queue = deque()
    
    for operation in operations:
        op, num = operation.split(' ')
        num = int(num)
        
        if op == 'I':
            queue.append(num)
        elif op == 'D':
            if not queue:
                continue
            queue = deque(sorted(queue))
            if num == 1:
                queue.pop()
            else:
                queue.popleft()
    
    queue = deque(sorted(queue))
    
    return [0, 0] if not queue else [queue[-1], queue[0]]