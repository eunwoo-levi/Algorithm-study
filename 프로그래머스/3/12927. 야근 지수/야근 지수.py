import heapq

def solution(n, works):
    if sum(works) <= n:
        return 0
    
    heap = []
    for work in works:
        heapq.heappush(heap, -work)
    
    for _ in range(n):
        maximum = heapq.heappop(heap)
        heapq.heappush(heap, maximum + 1)   # 음수라서 +1이 실제론 1 감소
    
    return sum(x*x for x in map(lambda w: -w, heap))