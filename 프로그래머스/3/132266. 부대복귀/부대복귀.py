from collections import deque
from collections import defaultdict

def solution(n, roads, sources, destination):
    graph = defaultdict(list)
    
    for a, b in roads:
        graph[a].append(b)
        graph[b].append(a)
    
    dist = [-1] * (n + 1)
    queue = deque([destination])
    dist[destination] = 0
    
    while queue:
        cur = queue.popleft()
        
        for nxt in graph[cur]:
            if dist[nxt] == -1:
                dist[nxt] = dist[cur] + 1
                queue.append(nxt)
    
    answer = []
    for source in sources:
        answer.append(dist[source])
    
    return answer