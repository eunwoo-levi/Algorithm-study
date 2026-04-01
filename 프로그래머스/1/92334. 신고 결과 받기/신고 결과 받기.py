from collections import defaultdict

def solution(id_list, report, k):
    answer = [0] * len(id_list)
    
    idx = {name: i for i, name in enumerate(id_list)}
    reported = defaultdict(int)
    reporters = defaultdict(list)
    
    for r in set(report):   # 중복 신고 제거
        give, get = r.split()
        reported[get] += 1
        reporters[get].append(give)
    
    for name, cnt in reported.items():
        if cnt >= k:
            for reporter in reporters[name]:
                answer[idx[reporter]] += 1
    
    return answer