# 한 선수에 대해서 (전체 인원 - 자기자신) n-1 = 진 사람 + 이긴 사람 이면 됌 
# 하지만 관계를 선수들을 타고 가면서 알려면 dfs or bfs를 통해서 해야함
# 선수 사이 모두 연결 판단 여부 => bfs

from collections import defaultdict
from collections import deque

def solution(n, results):
    answer = 0
    win_graph = defaultdict(list)
    lose_graph = defaultdict(list)
    
    for win, lose in results:
        win_graph[win].append(lose)
        lose_graph[lose].append(win)
        
    def bfs(start, graph):
        visited = [False] * (n+1)
        visited[start] = True
        queue = deque([start])
        count = 0
        
        while queue:
            cur = queue.popleft()
            
            for next in graph[cur]:
                if not visited[next]:
                    visited[next] = True
                    queue.append(next)
                    count += 1
        
        return count
        
    
    for i in range(1, n + 1):
        win = bfs(i, win_graph)
        lose = bfs(i, lose_graph)
        
        if win + lose == n-1:
            answer += 1
    
    return answer