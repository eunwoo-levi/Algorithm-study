from itertools import combinations
from bisect import bisect_left

def solution(info, query):
    table = {}

    # 1. info를 16개 조합으로 확장해서 저장
    for person in info:
        parts = person.split()
        attrs = parts[:-1]      # 언어, 직군, 경력, 소울푸드
        score = int(parts[-1])  # 점수

        for n in range(5):  # 0~4개 선택
            for comb in combinations(range(4), n):
                temp = attrs[:]
                for idx in comb:
                    temp[idx] = '-'
                key = ' '.join(temp)
                if key not in table:
                    table[key] = []
                table[key].append(score)

    # 2. 각 key의 점수 리스트 정렬
    for key in table:
        table[key].sort()

    # 3. query 처리
    answer = []
    for q in query:
        q = q.replace(' and ', ' ')
        lang, job, level, food, score = q.split()
        score = int(score)

        key = f'{lang} {job} {level} {food}'

        if key not in table:
            answer.append(0)
            continue

        scores = table[key]
        idx = bisect_left(scores, score)
        answer.append(len(scores) - idx)

    return answer