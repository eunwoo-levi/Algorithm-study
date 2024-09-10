function solution(s) {
    var answer = [-1];
    
    
    for(let i=1; i<s.length;i++){
        let found=false;
        let cnt=0;
        for(let j=i-1;j>=0;j--){
            cnt++;
            if(s[i]===s[j]){
                answer.push(cnt)
                found=true;
                break;
            }
        }
        if(!found){
            answer.push(-1)
        }
    }
    
    return answer;
}