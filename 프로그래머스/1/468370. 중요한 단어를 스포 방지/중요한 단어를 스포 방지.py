# 각 단어들의 위치와, start, end의 idx를 어떻게 서로 구분할것인가? -> [word, start, end] 리스트를 만들자!

# 1. 스포 방지 단어
# 2. 스포 노구간, 스포 구간에서 등장 한적 없어야 함  -> set 사용하면 될듯
# 3. 이전 스포 방지 단어와 중복 X
# 4. 무조건 왼쪽부터 (여러 단어 공개 경우에도)

def solution(message, spoiler_ranges):
    answer = 0

    words = []
    s_idx = 0

    for i, m in enumerate(message):
        if m == ' ':
            words.append((message[s_idx:i], s_idx, i - 1))
            s_idx = i + 1
        elif i == len(message) - 1:
            words.append((message[s_idx:i+1], s_idx, i))

    no_spo = set()
    revealed_at = [[] for _ in range(len(spoiler_ranges))]

    for word, start, end in words:
        spoiler_list = []

        for idx, (l, r) in enumerate(spoiler_ranges):
            if not (end < l or r < start):
                spoiler_list.append(idx)

        if not spoiler_list:
            no_spo.add(word)
        else:
            last_idx = spoiler_list[-1]
            revealed_at[last_idx].append(word)

    seen_spo = set()

    for idx in range(len(spoiler_ranges)):
        for word in revealed_at[idx]:
            if word in no_spo:
                continue
            if word in seen_spo:
                continue

            answer += 1
            seen_spo.add(word)

    return answer