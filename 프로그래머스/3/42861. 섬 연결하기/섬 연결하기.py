def solution(n, costs):
    parent = [i for i in range(n)]
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  # 경로 압축
        return parent[x]
    
    def union(a, b):
        root_a = find(a)
        root_b = find(b)
        
        if root_a != root_b:
            parent[root_b] = root_a
            return True
        return False
    
    costs.sort(key=lambda x: x[2])  # 비용 기준 정렬
    
    answer = 0
    count = 0
    
    for a, b, cost in costs:
        if union(a, b):   # 서로 다른 집합이면 연결
            answer += cost
            count += 1
            
            if count == n - 1:
                break
    
    return answer