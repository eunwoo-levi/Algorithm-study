def solution(numbers, target):
    answer = 0
    N = len(numbers)
    
    def dfs(total, idx):
        nonlocal answer
        if idx == N:
            if total == target:
                answer += 1
            return;
        
        dfs(total+numbers[idx], idx+1)
        dfs(total-numbers[idx], idx+1)
    
    dfs(0, 0)
    
    return answer