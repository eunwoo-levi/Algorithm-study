function solution(s) {
    var answer = [-1];
    
    for(let i=1; i<s.length; i++){
        const sentence = s.slice(0,i).split('').reverse();
        const idx = sentence.indexOf(s[i]);
        answer.push(idx===-1?-1:idx+1);
        
    }
    
    return answer;
}