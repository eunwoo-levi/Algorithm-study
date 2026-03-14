def solution(prices):
    answer = []
    
    for i in range(len(prices)):
        count = 0
        flag = False
        for j in range(i, len(prices)):
            count += 1
            if prices[i] > prices[j]:
                break
            
        answer.append(count-1)
        
    
    return answer