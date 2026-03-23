def solution(stones, k):
    start = 0
    end = max(stones)
    
    while start <= end:
        mid = (start + end) // 2
        
        cnt = 0
        for stone in stones:
            if stone < mid:
                cnt += 1
                if cnt >= k:
                    break
            else:
                cnt = 0
        
        if cnt >= k:
            end = mid - 1
        else:
            start = mid + 1
    
    return end