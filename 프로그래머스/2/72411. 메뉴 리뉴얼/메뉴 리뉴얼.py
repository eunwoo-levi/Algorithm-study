from itertools import combinations
from collections import defaultdict
from collections import Counter

def solution(orders, course):
    answer = []
    
    menus = defaultdict(list)
    
    for n in course:
        comb_list = []
        
        for order in orders:
            # 배열 뒤에 원소들 이어붙임 (concat)
            comb_list += combinations(sorted(order), n)
            
        counter = Counter(comb_list)
        
        if not counter:
            continue
        
        max_count = max(counter.values())
        
        # 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합
        if max_count < 2:
            continue
            
        for menu, cnt in counter.items():
            if cnt == max_count:
                answer.append(''.join(menu))
    
    return sorted(answer)