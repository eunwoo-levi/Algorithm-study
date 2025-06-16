
//자연수 n을 연속된 자연수의 합으로 표현할 수 있는 경우의 수는
//👉 n의 홀수 약수의 개수와 같다는 정리!

function solution(n) {
    var answer = 0;
    for (var i = 1; i <= n; i++) {
        if ((n % i == 0) && (i % 2 == 1)) {
            answer++;
        }
    }
    return answer;
}

