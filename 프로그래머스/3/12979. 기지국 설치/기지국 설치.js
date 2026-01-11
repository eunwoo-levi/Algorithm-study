function solution(n, stations, w) {
    let s = 0;
    let [now, result] = [1, 0];
    while (1) {
        if (now > n) break;
        if (s < stations.length) {
            const front = stations[s];
            if (now >= front - w && now <= front + w) {
                now = stations[s++] + w + 1;
                continue;
            }
        } else {
            if (now + w > n) {
                result += 1;
                break;
            }
        }
        now += w * 2 + 1;
        result += 1;
    }
    return result;
}