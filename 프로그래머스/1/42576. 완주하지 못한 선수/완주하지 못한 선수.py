from collections import Counter

def solution(participant, completion):
    answer = ''
    
    count = Counter(participant)
    
    for c in completion:
        count[c] -= 1
    
    for name, num in count.items():
        if num > 0:
            return name
