// 소수 판별 함수 수정
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    let answer = 0;

    // n을 k진법으로 변환
    let digit = "";
    while (n > 0) {
        digit = (n % k) + digit;
        n = Math.floor(n / k);
    }

    // 0을 기준으로 숫자 나누기
    const parts = digit.split('0');

    // 나눠진 부분이 소수인지 확인
    for (const part of parts) {
        if(isPrime(Number(part))){
            answer++;
        }
        
    }

    return answer;
}
