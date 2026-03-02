def solution(survey, choices):
    answer = ''
    
    type = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N']
    
    types = {
        'R':0, 'T':0,
        'C':0, 'F':0,
        'J':0, 'M':0,
        'A':0, 'N':0
    }

    for i in range(len(survey)):
        A, B = list(survey[i])
        choice = choices[i]

        if(choice < 4):
            types[A] += 4 - choice
        elif(choice > 4):
            types[B] += choice - 4

    answer += 'R' if types['R'] >= types['T'] else 'T'
    answer += 'C' if types['C'] >= types['F'] else 'F'
    answer += 'J' if types['J'] >= types['M'] else 'M'
    answer += 'A' if types['A'] >= types['N'] else 'N'
                    
    return answer