def solution(scores):
    wanho_a, wanho_b = scores[0]
    wanho_sum = wanho_a + wanho_b

    # 첫 점수 내림차순, 둘째 점수 오름차순
    scores.sort(key=lambda x: (-x[0], x[1]))

    rank = 1
    max_b = 0

    for a, b in scores:
        # 앞에 나보다 a는 크거나 같고, b도 더 큰 사람이 있으면 탈락
        if b < max_b:
            # 그 사람이 완호면 바로 -1
            if a == wanho_a and b == wanho_b:
                return -1
        else:
            # 탈락하지 않은 사람만 순위 비교
            if a + b > wanho_sum:
                rank += 1
            max_b = max(max_b, b)

    return rank