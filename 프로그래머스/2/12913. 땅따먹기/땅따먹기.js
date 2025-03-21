function solution(land) {
    for (let i = 1; i < land.length; i++) {
        // 현재 행의 각 열의 값을 이전 행의 값과 더해간다
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]); // 이전 행의 1, 2, 3번째 열을 제외한 값 더하기
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]); // 이전 행의 0, 2, 3번째 열을 제외한 값 더하기
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]); // 이전 행의 0, 1, 3번째 열을 제외한 값 더하기
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]); // 이전 행의 0, 1, 2번째 열을 제외한 값 더하기
    }

    // 마지막 행에서 가장 큰 값을 반환
    return Math.max(...land[land.length - 1]);
}
