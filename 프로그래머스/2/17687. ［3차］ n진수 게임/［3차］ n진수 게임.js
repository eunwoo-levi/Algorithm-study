function solution(n, t, m, p) {
    let result = "";
    let numStr = "";
    let num = 0;
    
    // 필요한 길이만큼 변환된 숫자 문자열 생성 , 전체 기회 갯수: t(1명 당 숫자 총 갯수) * m(명)
    while (numStr.length < t * m) {
        numStr += num.toString(n).toUpperCase();
        num++;
    }

    // 본인의 순서에 해당하는 숫자만 추출
    for (let i = 0; i < t; i++) {
        result += numStr[i * m + (p - 1)];
    }

    return result;
}

