function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    let res = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === ' ') { // 공백 처리
            res += ' ';
            continue;
        }

        if (upper.includes(char)) {
            let index = (upper.indexOf(char) + n) % upper.length;
            res += upper[index];
        } else if (lower.includes(char)) {
            let index = (lower.indexOf(char) + n) % lower.length;
            res += lower[index];
        }
    }
    
    return res;
}
