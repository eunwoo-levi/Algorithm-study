def solution(n, wires):
    graph = [[] for _ in range(n + 1)]
    
    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
    
    def dfs(node, visited, cut_a, cut_b):
        visited[node] = True
        count = 1
        
        for next_node in graph[node]:
            # 끊은 전선이면 무시
            if (node == cut_a and next_node == cut_b) or (node == cut_b and next_node == cut_a):
                continue
                
            if not visited[next_node]:
                count += dfs(next_node, visited, cut_a, cut_b)
        
        return count
    
    answer = n
    
    for a, b in wires:
        visited = [False] * (n + 1)
        
        # 아무 노드 하나에서 시작해서 연결된 개수 세기
        count = dfs(1, visited, a, b)
        diff = abs(count - (n - count))
        answer = min(answer, diff)
    
    return answer