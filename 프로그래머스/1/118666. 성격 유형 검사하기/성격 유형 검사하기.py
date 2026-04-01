# survey를 for문 순환하면서 점수 업데이트
# types_A, types_B로 나눠서 타입에 맞는 점수 계산

def solution(survey, choices):
    answer = ''
    
    types = {type: 0 for type in ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N']}
    
    for type, choice in zip(survey, choices):
        A, B = list(type)
        
        if choice < 4:
            types[A] += 4 - choice
        elif choice > 4:
            types[B] += choice - 4
        
    
    answer += 'R' if types['R'] >= types['T'] else 'T'
    answer += 'C' if types['C'] >= types['F'] else 'F'
    answer += 'J' if types['J'] >= types['M'] else 'M'
    answer += 'A' if types['A'] >= types['N'] else 'N'
    
    return answer