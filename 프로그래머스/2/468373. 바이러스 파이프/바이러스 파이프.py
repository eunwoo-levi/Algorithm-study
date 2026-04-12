from collections import defaultdict, deque

def solution(n, infection, edges, k):
    # 색별 그래프
    graphs = [defaultdict(list) for _ in range(4)]  # 1,2,3 사용

    for x, y, t in edges:
        graphs[t][x].append(y)
        graphs[t][y].append(x)

    # color_components[c] = c색 그래프의 연결요소(set) 리스트
    color_components = [[] for _ in range(4)]

    for color in range(1, 4):
        visited = [False] * (n + 1)

        for start in range(1, n + 1):
            if visited[start]:
                continue

            queue = deque([start])
            visited[start] = True
            component = set()

            while queue:
                cur = queue.popleft()
                component.add(cur)

                for nxt in graphs[color][cur]:
                    if not visited[nxt]:
                        visited[nxt] = True
                        queue.append(nxt)

            color_components[color].append(component)

    # 현재 infected 상태에서 color를 한 번 열었을 때의 결과
    def spread(infected, color):
        new_infected = set(infected)

        for comp in color_components[color]:
            # 연결요소와 현재 감염 집합이 하나라도 겹치면
            if comp & infected:
                new_infected |= comp

        return new_infected

    memo = {}

    def dfs(step, infected):
        state_key = (step, tuple(sorted(infected)))
        if state_key in memo:
            return memo[state_key]

        # 지금 멈추는 경우
        best = len(infected)

        if step == k:
            memo[state_key] = best
            return best

        # 다음 행동으로 색 1,2,3 중 하나 선택
        for color in range(1, 4):
            next_infected = spread(infected, color)
            best = max(best, dfs(step + 1, next_infected))

        memo[state_key] = best
        return best

    return dfs(0, {infection})