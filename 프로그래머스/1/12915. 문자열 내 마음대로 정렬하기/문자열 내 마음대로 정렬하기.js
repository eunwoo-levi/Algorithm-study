function solution(strings, n) {
    strings.sort((a, b) => {
        const charA = a[n] || '';
        const charB = b[n] || '';

        // n번째 문자가 같으면 전체 문자열을 사전순으로 정렬
        if (charA === charB) {
            return a > b ? 1 : a < b ? -1 : 0;
        }

        // n번째 문자를 기준으로 정렬
        return charA > charB ? 1 : -1;
    });

    return strings;
}
