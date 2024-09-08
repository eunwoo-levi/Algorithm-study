function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    var answer = '';
    
    for(let i=0; i<s.length;i++){
        if(s[i]===" "){
            answer+=" "
            continue;
        }
        
        let text = upper.includes(s[i])?upper:lower
        let index = text.indexOf(s[i])+n;
        if(index>=text.length)  index-=text.length
        
        answer+=text[index]
    }
        
    return answer;
}