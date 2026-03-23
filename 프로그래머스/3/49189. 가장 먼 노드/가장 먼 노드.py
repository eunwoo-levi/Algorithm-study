from collections import deque
from collections import defaultdict

def solution(n, edge):
    answer = 0
    
    nodes = defaultdict(int)
    graph = defaultdict(list)    

    visited = [False] * (n+1)
    queue = deque()
    
    nodes[1] = 0
    visited[1] = True
    queue.append((1, 0))
    
    for e in edge:
        start, end = e
        graph[start].append(end)
        graph[end].append(start)
    
    while queue:
        cur, cnt = queue.popleft()
        
        for next in graph[cur]:
            if not visited[next]:
                visited[next] = True
                nodes[next] = cnt + 1
                queue.append((next, cnt+1))
    
    max_node = max(nodes.values())
    
    for node in nodes.values():
        if node == max_node:
            answer += 1
            
    return answer