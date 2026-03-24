def solution(tickets):
    answer = []
    
    visited = [False] * len(tickets)
    
    def dfs(cur):
        if len(cur) == len(tickets) + 1:
 # 주의: append(cur)을 하면 같은 리스트 객체를 참조로 넣어두는 거라 DFS가 끝나고 pop() 되면 answer 안에 들어간 값도 같이 바뀜
            answer.append(cur[:])          
            return
        
        for i in range(len(tickets)):
            start, end = tickets[i]
            if not visited[i] and cur[-1] == start:
                
                visited[i] = True
                cur.append(end)
                dfs(cur)
                cur.pop()
                visited[i] = False
        
    dfs(['ICN'])
    
    answer.sort()
    
    return answer[0]