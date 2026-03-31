def solution(N, number):
    if N == number:
        return 1

    dp = [set() for _ in range(9)]  # 1~8 사용

    for i in range(1, 9):
        # 이어붙인 수 추가
        dp[i].add(int(str(N) * i))

        # j개 사용한 결과와 i-j개 사용한 결과 조합
        for j in range(1, i):
            for a in dp[j]:
                for b in dp[i - j]:
                    dp[i].add(a + b)
                    dp[i].add(a - b)
                    dp[i].add(a * b)
                    if b != 0:
                        dp[i].add(a // b)

        # 현재 i개로 number 만들 수 있으면 바로 반환
        if number in dp[i]:
            return i

    return -1