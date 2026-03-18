from collections import deque

def solution(begin, target, words):
    answer = 0
    N = len(words)
    
    visited = [False] * N
    queue = deque()
    queue.append((begin, 0))
    
    while queue:
        word, step = queue.popleft()
        if word == target:
            return step
        
        for i in range(N):
            next_word = words[i]
            if not visited[i] and isValid(word, next_word):
                visited[i] = True
                queue.append((next_word, step + 1))
    
    
    return answer

def isValid(a, b):
    diff = 0
    for i in range(len(a)):
        if diff > 1:
            return False
        if a[i] != b[i]:
            diff += 1
    return diff == 1