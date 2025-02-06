function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    const weights = [781, 156, 31, 6, 1]; // 각 자리의 가중치

    let result = 0;

    for (let i = 0; i < word.length; i++) {
        const idx = vowels.indexOf(word[i]); // 현재 문자의 인덱스
        result += idx * weights[i] + 1; // 위치 값 계산
    }

    return result;
}
