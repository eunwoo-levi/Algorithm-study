function solution(arr1, arr2) {
    const result = [];
    const rowA = arr1.length;   // arr1의 행 개수
    const colA = arr1[0].length; // arr1의 열 개수
    const colB = arr2[0].length; // arr2의 열 개수

    // arr1의 행 개수 만큼 반복 (결과 행렬의 행을 채우기 위해)
    for (let i = 0; i < rowA; i++) {
        const row = [];
        // arr2의 열 개수 만큼 반복 (결과 행렬의 열을 채우기 위해)
        for (let j = 0; j < colB; j++) {
            let sum = 0;
            // arr1의 열 개수 만큼 반복 (곱셈 계산)
            for (let k = 0; k < colA; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            row.push(sum); // 결과 행렬에 원소 추가
        }
        result.push(row); // 결과 행렬에 행 추가
    }
    return result;
}
