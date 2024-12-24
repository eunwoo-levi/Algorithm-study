function solution(k, tangerine) {
    const countMap = new Map();
    for (const size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    const sortedCounts = [...countMap.values()].sort((a, b) => b - a);

    let total = 0; // 현재까지 선택한 귤 갯수
    let types = 0; // 사용한 귤 종류
    for (const count of sortedCounts) {
        total += count;
        types++;
        if (total >= k) break; // 목표 달성 시 종료
    }

    return types;
}
