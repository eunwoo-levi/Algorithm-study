function solution(weights) {
    const map = new Map();
    let answer = 0;

    const ratios = [1, 2 / 3, 3 / 4, 1 / 2];

    weights.sort((a, b) => a - b);

    for (let w of weights) {
        for (let r of ratios) {
            const target = w * r;
            if (map.has(target)) {
                answer += map.get(target);
            }
        }

        map.set(w, (map.get(w) || 0) + 1);
    }

    return answer;
}
