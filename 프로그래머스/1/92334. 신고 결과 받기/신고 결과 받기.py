# dict: 신고 당한 유저 -> 신고한 유저들 list
# dict: 신고 당한 유저 -> 신고 당한 횟수 int
from collections import defaultdict

def solution(id_list, report, k):
    answer = [0] * len(id_list)
    idx = {name: i for i, name in enumerate(id_list)}
    
    reported_user = defaultdict(list)
    reported = defaultdict(int)
    report_set = set()
    
    for r in report:
        give, get = r.split(' ')
        
        if not f"{give}-{get}" in report_set: 
            reported_user[get].append(give)
            reported[get] += 1
            report_set.add(f"{give}-{get}")
            
    
    # 신고를 k번 이상 당한 사람 기준으로 => 신고 한 사람들 answer 1씩 올리기
    for key, value in reported.items():
        if(value>=k):
             for user_value in reported_user[key]:
                    answer[idx[user_value]] += 1
    
    return answer