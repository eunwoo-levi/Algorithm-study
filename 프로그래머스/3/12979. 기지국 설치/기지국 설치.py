import math

def solution(n, stations, w):
    answer = 0
    cover = 2 * w + 1
    start = 1

    for s in stations:
        left = s - w
        right = s + w

        if start < left:
            gap = left - start
            answer += math.ceil(gap / cover)

        start = right + 1

    if start <= n:
        gap = n - start + 1
        answer += math.ceil(gap / cover)

    return answer