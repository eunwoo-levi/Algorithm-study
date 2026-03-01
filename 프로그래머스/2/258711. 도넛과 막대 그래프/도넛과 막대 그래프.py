# 막대 = out: 0 인 갯수
# 8자 = in: 2, out: 2 인 갯수
# 도넛 = 전체 부분 그래프 - 막대 갯수 - 8자 갯수
from collections import defaultdict
def solution(edges):
    stick = 0
    eight = 0
    
    in_degree = defaultdict(int)
    out_degree = defaultdict(int)
    
    graph = set()
    for edge in edges:
        start, end = edge
        graph.add(start)
        graph.add(end)
        out_degree[start] += 1
        in_degree[end] += 1
        
    
    for node in graph:
        if(in_degree[node] == 0 and out_degree[node] >= 2):
            start_node = node
            break
            
    for node in graph:
        if(out_degree[node] == 0):
            stick += 1
            
        if(in_degree[node]>=2 and out_degree[node] >= 2):
            eight += 1
    
    donut = out_degree[start_node] - stick - eight
    
    return [start_node, donut, stick, eight]