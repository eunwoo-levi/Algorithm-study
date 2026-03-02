from collections import deque

def solution(queue1, queue2):
    sum_1 = sum(queue1)
    sum_2 = sum(queue2)
    total = sum_1 + sum_2
    if(total%2 != 0):
        return -1
    target = total//2
    
    queue_1 = deque(queue1)
    queue_2 = deque(queue2)
    
    count = 0
    while(count < 3*len(queue1)):
        if sum_1 == target:
            return count
        elif sum_1>target:
            front = queue_1.popleft()
            queue_2.append(front)
            sum_1 -= front
            sum_2 += front
        else:
            front = queue_2.popleft()
            queue_1.append(front)
            sum_2 -= front
            sum_1 += front
        
        count+=1

    return -1