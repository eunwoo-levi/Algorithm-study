# table 객체에 모든 경우의 수를 담는다.
# 1. info 순환 -> table에 담음 -> 5개 차례대로 - 대체해서 추가
# 2. query 순환 -> table 비교하여 answer에 차례대로 카운팅
from collections import defaultdict
from itertools import combinations
from bisect import bisect_left

def solution(info, query):
    answer = []
    table = defaultdict(list)
    
    # info 전처리
    for person in info:
        parts = person.split()
        attrs = parts[:-1]
        score = int(parts[-1])
        
        for n in range(5):  # 0~4개를 '-'로 바꾸기
            for comb in combinations(range(4), n):
                temp = attrs[:]
                for idx in comb:
                    temp[idx] = '-'
                
                key = ' '.join(temp)
                table[key].append(score)
                
    # 각 key의 점수 리스트 정렬
    for key in table:
        table[key].sort()
                
    # query 처리
    for q in query:
        q = q.replace(' and ', ' ')
        infos = q.split(' ')
        parts = infos[:-1]
        score = int(infos[-1])
        
        key = ' '.join(parts)
        
        if key not in table:
            answer.append(0)
            continue
        
        scores = table[key]
        idx = bisect_left(scores, score)
        answer.append(len(scores) - idx)
    
    return answer