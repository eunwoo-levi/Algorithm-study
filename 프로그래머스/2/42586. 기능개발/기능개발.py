import math

def solution(progresses, speeds):
    answer = []
    
    max_progress = math.ceil((100 - progresses[0]) / speeds[0])
    count = 0
    
    for i in range(len(progresses)):
        progress = math.ceil((100 - progresses[i]) / speeds[i])
        
        if max_progress >= progress:
            count += 1
        else:
            answer.append(count)
            count = 1
            max_progress = progress
            
    if count != 0:
        answer.append(count)
    
    return answer