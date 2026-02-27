from collections import deque
def solution(begin, target, words):
    N = len(words)
    
    queue = deque()
    visited = [False] * N
    queue.append((begin, 0))
    
    while(queue):
        word, count = queue.pop()
        if word == target:
            return count
        
        for i in range(N):
            if visited[i] == False and diff(word, words[i]) == True:
                queue.append((words[i], count + 1))
                visited[i] = True
    
    
    return 0

def diff(a,b):
    diff = 0
    
    for i in range(len(a)):
        if a[i] != b[i]:
            diff += 1
            if diff>1:
                return False
            
    return diff == 1