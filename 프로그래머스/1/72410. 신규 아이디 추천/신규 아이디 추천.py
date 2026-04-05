def solution(new_id):
    # 1단계
    new_id = new_id.lower()
    # 2단계
    updated_id = ''
    for n in new_id:
        if 'a' <= n <= 'z' or '0' <= n <= '9' or n == '-' or n == '_' or n == '.':
            updated_id += n
            
    # 3단계
    updated2_id = updated_id[0]
    for n in updated_id[1:]:
        if n == '.':
            if updated2_id[-1] != '.':
                updated2_id += n
        else:
            updated2_id += n
    updated_id = updated2_id
    # 4단계
    if updated_id[0] == '.':
        updated_id = updated_id[1:]
    if updated_id and updated_id[-1] == '.':
        updated_id = updated_id[:-1]
    # 5단계
    if not updated_id:
        updated_id = 'a'
    # 6단계
    if len(updated_id) >= 16:
        updated_id = updated_id[:15]
        if updated_id[-1] == '.':
            updated_id = updated_id[:-1]
    # 7단계
    if len(updated_id) <= 2:
        updated_id += updated_id[-1] * (3 - len(updated_id))
        
    
    
    return updated_id