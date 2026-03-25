import heapq

def solution(jobs):
    answer = 0
    
    heap = []
    jobs.sort(key=lambda x: x[0])
    idx = 0
    time = 0
    
    while idx < len(jobs) or heap:
        while idx < len(jobs) and jobs[idx][0] <= time: 
            start, duration = jobs[idx]
            heapq.heappush(heap ,(duration, start))
            idx += 1
        
        if heap:
            duration, start = heapq.heappop(heap)
            time += duration
            answer += time - start
        
        else:
            time = jobs[idx][0]

        
    return answer // len(jobs)