function solution(priorities, location) {
    let maxPriority = Math.max(...priorities)
    let count=0;
    
    while(1){
        const currentProcess = priorities.shift();
        
        if(currentProcess===maxPriority){
            count++;
            if(location===0){
                return count;
            }
            maxPriority = Math.max(...priorities)
        }
        else{
            priorities.push(currentProcess)
        }
        
        location = location === 0 ? priorities.length - 1 : location - 1; // 위치 조정

    }
}