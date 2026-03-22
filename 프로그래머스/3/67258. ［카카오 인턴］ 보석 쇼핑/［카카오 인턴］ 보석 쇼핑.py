from collections import defaultdict

def solution(gems):
    total_types = len(set(gems))
    counter = defaultdict(int)
    
    start = 0
    kind = 0
    answer = [0, len(gems) - 1]
    
    for end in range(len(gems)):
        if counter[gems[end]] == 0:
            kind += 1
        counter[gems[end]] += 1
        
        while kind == total_types:
            if end - start < answer[1] - answer[0]:
                answer = [start, end]
            
            counter[gems[start]] -= 1
            if counter[gems[start]] == 0:
                kind -= 1
            start += 1
    
    return [answer[0] + 1, answer[1] + 1]