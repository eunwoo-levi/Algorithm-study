function solution(s) {
    // 숫자 문자열과 해당 숫자를 매핑한 배열
    const num = [
        ["zero", 0], ["one", 1], ["two", 2], ["three", 3], ["four", 4],
        ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9]
    ];

    // 매핑된 값을 순회하면서 문자열을 숫자로 변환
    num.forEach(pair => {
        // 각 문자열에 대해 replace를 이용해 숫자로 변환
        s = s.replace(new RegExp(pair[0], 'g'), pair[1]);
    });

    // 숫자로 변환한 문자열을 숫자로 변환하여 반환
    return Number(s);
}
