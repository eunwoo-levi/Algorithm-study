def solution(info, edges):
    answer = 0
    graph = [[] for _ in range(len(info))]

    for parent, child in edges:
        graph[parent].append(child)

    def dfs(sheep, wolf, current, candidates):
        nonlocal answer

        if info[current] == 0:
            sheep += 1
        else:
            wolf += 1

        if wolf >= sheep:
            return

        answer = max(answer, sheep)

        next_candidates = candidates[:]
        next_candidates.remove(current)
        next_candidates.extend(graph[current])

        for next_node in next_candidates:
            dfs(sheep, wolf, next_node, next_candidates)

    dfs(0, 0, 0, [0])

    return answer