function solution(progresses, speeds) {
    var answer = [];
    
    let idx=0, count=0, day=1;
    
    while(idx<progresses.length){
        if(progresses[idx]+ speeds[idx]*day>=100){
            count++;
            idx++;
            
            while(1){
                if(progresses[idx]+ speeds[idx]*day>=100){
                    count++;
                    idx++;
                }
                else    break;
            }
        }
        
        if(count!==0)  answer.push(count);
        count=0;
        
        day++;
    }
    
    return answer;
}