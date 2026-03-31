def solution(today, terms, privacies):
    answer = []
    types = {}
    
    for term in terms:
        type, month = term.split(' ')
        types[type] = int(month) * 28
    
    for i, privacy in enumerate(privacies):
        date, type = privacy.split(' ')
        days = left_days(today, date)
        
        if days >= types[type]:
            answer.append(i+1)
        
    return answer

def left_days(a, b):
    year_a, month_a, day_a = list(map(int, a.split('.')))
    year_b, month_b, day_b = list(map(int, b.split('.')))
    
    return (year_a - year_b) * 12 * 28 + (month_a - month_b) * 28 + (day_a - day_b)