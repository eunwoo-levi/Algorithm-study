from collections import defaultdict

def solution(today, terms, privacies):
    answer = []
    
    types = defaultdict(int)
    
    # dict: 타입에 따른 월 {key: 타입, value: 월}
    for term in terms:
        type, month = term.split(' ')
        types[type] = int(month)
        
    
    for i, privacy in enumerate(privacies):
        year, type = privacy.split(' ')
        
        days = calculateDays(year, today)
        
        if types[type] * 28 <= days:
            answer.append(i+1)
            
        
    
    return answer

def calculateDays(a, b):
    a_year, a_month, a_day = map(int, a.split('.'))
    b_year, b_month, b_day = map(int, b.split('.'))
    
    return (b_year-a_year) * 12 * 28 + (b_month-a_month) * 28 + b_day - a_day