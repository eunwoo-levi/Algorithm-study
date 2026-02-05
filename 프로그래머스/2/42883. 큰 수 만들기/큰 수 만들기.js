function solution(number, k) {
    const len = number.length;
    const stack = [];
    
    let idx = 0;
    while(idx<len && k>0){
        while(k>0 && stack.length>0  && stack[stack.length-1]<number[idx]){
            k--;
            stack.pop();
        }
        stack.push(number[idx]);
        idx++;
    }
    
    let answer = stack.join("") + number.slice(idx);
    
    if(k>0){
        answer = answer.slice(0, answer.length-k);
    }
    return answer === "" ? "0" : answer;
}