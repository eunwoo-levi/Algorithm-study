function solution(clothes) {
    const map = new Map();
    
    // 의상 카테고리별로 옷의 개수를 저장
    for (let [item, category] of clothes) {
        if (map.has(category)) {
            map.set(category, map.get(category) + 1);
        } else {
            map.set(category, 1);
        }
    }

    // 조합을 계산 (각 카테고리에서 "옷을 고르거나 안 고르거나" 선택할 수 있음)
    let result = 1;
    for (let count of map.values()) {
        result *= (count + 1);  // 선택할 수 있는 옷 개수 + 1 (고르지 않는 경우 포함)
    }
    
    // 아무것도 고르지 않는 경우를 제외하기 위해 1을 빼줌
    return result - 1;
}
