function solution(numbers) {
    let res = new Array(numbers.length).fill(-1); // 기본값을 -1로 설정
    let stack = []; // 스택 초기화
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        // 스택의 top이 현재 숫자보다 작으면 제거
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) {
            stack.pop();
        }
        
        // 스택에 남아 있는 가장 큰 값이 정답
        if (stack.length > 0) {
            res[i] = stack[stack.length - 1];
        }
        
        // 현재 숫자를 스택에 추가
        stack.push(numbers[i]);
    }
    
    return res;
}
