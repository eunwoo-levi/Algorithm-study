from collections import Counter

def solution(participant, completion):
    
    p = Counter(participant)
    c = Counter(completion)
    answer = list((p-c).keys())
    
    return answer[0]
    
    
