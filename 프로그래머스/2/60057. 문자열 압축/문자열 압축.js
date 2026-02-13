function solution(s) {
    let min = s.length;

    for (let unit = 1; unit <= s.length / 2; unit++) {
        let compressed = "";
        let prev = s.slice(0, unit);
        let count = 1;

        for (let i = unit; i < s.length; i += unit) {
            const cur = s.slice(i, i + unit);

            if (prev === cur) {
                count++;
            } else {
                compressed += (count > 1 ? count : "") + prev;
                prev = cur;
                count = 1;
            }
        }

        compressed += (count > 1 ? count : "") + prev;

        min = Math.min(min, compressed.length);
    }

    return min;
}
