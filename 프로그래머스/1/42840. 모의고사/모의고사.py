first = [1, 2, 3, 4, 5]
second = [2, 1, 2, 3, 2, 4, 2, 5]
third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]


def solution(answers):
    answer_total = [0, 0, 0]
    
    for i, answer in enumerate(answers):
        if first[i % len(first)] == answer:
            answer_total[0] += 1
        if second[i % len(second)] == answer:
            answer_total[1] += 1
        if third[i % len(third)] == answer:
            answer_total[2] += 1
    
    max_answer = max(answer_total)
    
    return [i+1 for i, answer in enumerate(answer_total) if answer == max_answer]