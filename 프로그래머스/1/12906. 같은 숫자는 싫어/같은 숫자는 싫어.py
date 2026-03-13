from collections import Counter

def solution(arr):
    answer = [arr[0]]
    
    
    for num in arr[1:]:
        if answer[len(answer)-1] != num:
            answer.append(num)
    
    return answer