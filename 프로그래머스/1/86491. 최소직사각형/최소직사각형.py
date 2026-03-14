def solution(sizes):
    max_a = 1
    max_b = 1
    
    for a,b in sizes:
        if a < b:
            a, b = b, a
        if max_a < a:
            max_a = a
        if max_b < b:
            max_b = b
    
    
    return max_a * max_b