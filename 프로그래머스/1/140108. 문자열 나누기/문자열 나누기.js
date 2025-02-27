function solution(s) {
    let res = 0;
    let idx = 0;
    
    while (idx < s.length) {
        let firstChar = s[idx];
        let sameCount = 0;
        let diffCount = 0;
        
        while (idx < s.length) {
            if (s[idx] === firstChar) {
                sameCount++;
            } else {
                diffCount++;
            }
            
            idx++;
            
            if (sameCount === diffCount) {
                break;
            }
        }
        
        res++;
    }
    
    return res;
}
