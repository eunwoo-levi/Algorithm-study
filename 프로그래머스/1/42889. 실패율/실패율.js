function solution(N, stages) {
    var answer = [];
    
    let total = stages.length;
    let A = Array(N).fill(0);
    
    // 각 스테이지에 도달한 사람의 수 계산
    for(let i = 0; i < total; i++) {
        if (stages[i] <= N) { // N보다 큰 값은 이미 모든 스테이지를 통과한 것이므로 제외
            A[stages[i] - 1]++;
        }
    }
    
    let B = A.map((value, index) => {
        let fail = value / total;
        total -= value;
        return { value: fail, index: index + 1 };
    });
    
    B.sort((a, b) => b.value - a.value);
    
    answer = B.map(item => item.index);
    
    return answer;
}
