def solution(sequence):
    pulse1 = []
    pulse2 = []
    
    for i, num in enumerate(sequence):
        if i % 2 == 0:
            pulse1.append(num)
            pulse2.append(-num)
        else:
            pulse1.append(-num)
            pulse2.append(num)
    
    def max_subarray(arr):
        cur = arr[0]
        best = arr[0]
        
        for i in range(1, len(arr)):
            cur = max(arr[i], cur + arr[i])
            best = max(best, cur)
        
        return best
    
    return max(max_subarray(pulse1), max_subarray(pulse2))