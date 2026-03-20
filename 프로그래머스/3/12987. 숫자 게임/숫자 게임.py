# 이길 수 있으면 가장 작은 이기는 수를 내고, 못 이기면 가장 작은 수를 버리기

def solution(A, B):
    answer = 0
    
    A.sort()
    B.sort()
    
    a = 0
    b = 0
    
    while a < len(A) and b < len(B):
        if A[a] < B[b]:
            answer += 1
            a += 1
            b += 1
        else:
            b += 1
    
    return answer

