from collections import deque

def solution(begin, target, words):
    answer = 0
    N = len(words)
    
    visited = [False] * N
    queue = deque()
    queue.append((begin, 0))
    
    while queue:
        word, cnt = queue.popleft()
        
        if word == target:
            return cnt
        
        for i, next_word in enumerate(words):
            if not visited[i] and isOneDiff(word, next_word):
                visited[i] = True
                queue.append((next_word, cnt+1))
    
    
    return 0

def isOneDiff(a, b):
    diff = 0
    
    for i in range(len(a)):
        if diff > 1:
            return False
        if a[i] != b[i]:
            diff+=1
            
    return diff == 1