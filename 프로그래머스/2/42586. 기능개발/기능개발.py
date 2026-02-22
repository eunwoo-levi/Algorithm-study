import math

def solution(progresses, speeds):
    answer = []
    days = []
    
    for i in range(len(progresses)):
        days.append(math.ceil((100-progresses[i]) / speeds[i]))
    
    count = 1
    current = days[0]
    
    for i in range(1, len(days)):
        if(current >= days[i]):
            count += 1
        else:
            answer.append(count)
            count = 1
            current = days[i]
    
    answer.append(count)
    
    return answer