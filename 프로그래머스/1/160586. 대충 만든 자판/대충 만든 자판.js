function solution(keymap, targets) {
    var res = [];
    
    const keys = keymap.map(key => key.split(""));
    
    for (let i = 0; i < targets.length; i++) {
        let count = 0;
        let isPossible = true;
        
        for (let j = 0; j < targets[i].length; j++) {
            const char = targets[i][j];
            
            // 각 key 배열에서 문자의 인덱스를 계산하여 유효한 값만 필터링
            const indexes = keys.map(key => key.indexOf(char)).filter(index => index !== -1);
            
            if (indexes.length === 0) {
                // 해당 문자가 keymap 어디에도 없을 경우
                res.push(-1);
                isPossible = false;
                break;
            }
            
            // 최소 인덱스를 찾아서 +1 (1부터 시작이므로)
            count += Math.min(...indexes) + 1;
        }
        
        if (isPossible) {
            res.push(count);
        }
    }
    
    return res;
}
