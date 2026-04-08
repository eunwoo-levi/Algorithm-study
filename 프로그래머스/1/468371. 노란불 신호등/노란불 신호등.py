from math import gcd

def lcm(a, b):
    return a * b // gcd(a, b)

def solution(signals):
    # 전체 반복 주기 = 각 신호등 주기의 최소공배수
    total_cycle = 1
    for g, y, r in signals:
        cycle = g + y + r
        total_cycle = lcm(total_cycle, cycle)

    # 1초부터 전체 반복 주기까지 확인
    for t in range(1, total_cycle + 1):
        all_yellow = True

        for g, y, r in signals:
            cycle = g + y + r
            pos = (t - 1) % cycle + 1   # 현재 주기 내 위치 (1-based)

            # 노란불 구간이 아니면 실패
            if not (g < pos <= g + y):
                all_yellow = False
                break

        if all_yellow:
            return t

    return -1