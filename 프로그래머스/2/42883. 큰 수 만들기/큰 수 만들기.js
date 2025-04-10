function solution(number, k) {
    const queue = [number[0]];
    let idx = 1;

    while (idx !== number.length && k !== 0) {
        while (k !== 0 && queue[queue.length - 1] < number[idx]) {
            queue.pop();
            k--;
        }
        queue.push(number[idx++]);
    }

    // 남은 숫자 붙이기
    const result = queue.join("") + number.slice(idx);

    // k가 아직 남아 있으면 뒤에서 제거
    return result.slice(0, result.length - k);
}
