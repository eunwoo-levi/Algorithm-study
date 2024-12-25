function solution(s) {
    let answer = 0;
    
    s = s.split('');
    
    for (let i = 0; i < s.length; i++) {
        let isValid = true;
        let stack = [];
        
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
        
        if (isValid && stack.length === 0) {
            answer++;
        }
        
        // 배열을 회전
        s.push(s.shift());
    }
    
    return answer;
}
