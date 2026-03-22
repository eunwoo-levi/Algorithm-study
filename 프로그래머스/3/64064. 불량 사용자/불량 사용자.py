from itertools import product
from collections import defaultdict

def solution(user_id, banned_id):
    ban_ids = defaultdict(list)
    
    for i, ban in enumerate(banned_id):
        for user in user_id:
            if isBanned(ban, user):
                ban_ids[i].append(user)
    
    answer = set()
    
    # 각 banned_id 자리의 후보 리스트를 순서대로 꺼냄
    candidates = [ban_ids[i] for i in range(len(banned_id))]
    
    # 각 자리마다 후보 1명씩 뽑는 모든 경우
    for users in product(*candidates):
        # 같은 유저를 중복 선택하면 안 됨
        if len(set(users)) == len(banned_id):
            answer.add(frozenset(users))
    
    return len(answer)

def isBanned(a, b):
    if len(a) != len(b):
        return False
    
    for i in range(len(a)):
        if a[i] == '*':
            continue
        if a[i] != b[i]:
            return False
        
    return True