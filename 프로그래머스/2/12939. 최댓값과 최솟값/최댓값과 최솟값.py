def solution(s):
    answer = list(map(int, s.split(' ')))
    
    return f"{min(answer)} {max(answer)}"
    
