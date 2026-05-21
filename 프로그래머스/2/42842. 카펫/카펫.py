def solution(brown, yellow):
    for x in range(1, yellow + 1):
        y = yellow // x
        if yellow % y != 0:
            continue
            
        if (x+2) * (y+2) - yellow == brown:
            return [y + 2, x + 2]