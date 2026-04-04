def solution(n):
    answer = []
    
    def hanoi(num, start, via, end):
        if num == 1:
            answer.append([start, end])
            return
        
        hanoi(num - 1, start, end, via)   # n-1개를 보조 기둥으로
        answer.append([start, end])       # 가장 큰 원판 이동
        hanoi(num - 1, via, start, end)   # 다시 목적지로
    
    hanoi(n, 1, 2, 3)
    return answer