from collections import Counter

def solution(clothes):
    kinds = Counter(kind for _, kind in clothes)
    
    answer = 1
    for v in kinds.values():
        answer *= (v+1)
    
    return answer - 1