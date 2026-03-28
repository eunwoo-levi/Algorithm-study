def solution(s):
    n = len(s)
    answer = 1
    
    for i in range(n):
        answer = max(answer, expand(s, i, i))       # 홀수 길이
        answer = max(answer, expand(s, i, i + 1))   # 짝수 길이
    
    return answer


def expand(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return right - left - 1