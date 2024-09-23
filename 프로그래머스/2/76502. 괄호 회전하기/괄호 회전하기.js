function solution(s) {
    let answer = 0;
    
    // 문자열을 배열로 변환
    s = s.split('');
    
    // 문자열의 길이만큼 회전
    for (let i = 0; i < s.length; i++) {
        let isValid = true;
        let stack = [];
        
        // 짝이 맞는지 확인하는 반복문
        for (let j = 0; j < s.length; j++) {
            if (s[j] === '(' || s[j] === '{' || s[j] === '[') {
                stack.push(s[j]);
            } else {
                let last = stack.pop();
                if (
                    (s[j] === ')' && last !== '(') ||
                    (s[j] === '}' && last !== '{') ||
                    (s[j] === ']' && last !== '[')
                ) {
                    isValid = false;
                    break;
                }
            }
        }
        
        // 유효한 경우에만 answer 증가
        if (isValid && stack.length === 0) {
            answer++;
        }
        
        // 배열을 회전
        s.push(s.shift());
    }
    
    return answer;
}
