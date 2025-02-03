function solution(topping) {
    const rightMap = new Map();
    const leftSet = new Set();
    let res = 0;

    // 1. 모든 토핑을 오른쪽에 저장
    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    // 2. 토핑을 하나씩 왼쪽으로 이동하면서 비교
    for (const t of topping) {
        leftSet.add(t);  // 왼쪽에 토핑 추가

        // 오른쪽에서 토핑 하나 제거
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }

        // 3. 토핑 종류 수 비교
        if (leftSet.size === rightMap.size) {
            res++;
        }
    }

    return res;
}
