function solution(queue1, queue2) {
    var answer = 0;
    
    const queue = queue1.concat(queue2);
    const total = queue.reduce((acc, cur)=> acc+cur, 0);
    if(total%2!==0) return -1;  // 전체 합이 홀수면 불가능
    
    let l=0, r=queue1.length, target = total/2;
    let currentSum = queue1.reduce((acc, cur)=>acc+cur, 0);
    
    while(answer<queue.length*2){     // r<queue.length만 하게되면 r이 끝나도 l++가 계속 되는 경우 안됌
        if(currentSum===target)    return answer;
        
        else if(currentSum > target){
            currentSum -= queue[l++];
        }
        else if(currentSum < target){
            currentSum += queue[r++];
        }
        
        answer++;
    }
    
    return -1;
}