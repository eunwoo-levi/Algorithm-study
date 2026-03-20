def solution(n, s):
    if n > s:
        return [-1]
    
    base = s // n
    remain = s % n
    
    answer = [base] * n
    
    for i in range(remain):
        answer[n - 1 - i] += 1
    
    return answer