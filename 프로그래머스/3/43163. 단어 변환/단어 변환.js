function solution(begin, target, words) {
    const visited = Array.from({length: words.length}, ()=> false);
    const queue = [[begin, 0]];
    
    function isValid(A, B){
        let diff = 0;
        for(let i=0; i<A.length; i++){
            if(A[i] !== B[i])   diff++;
        }
        
        return diff === 1;
    }
    
    while(queue.length!==0){
        const [word, count] = queue.shift();
        if(word===target)   return count;
        
        for(let i=0; i<words.length; i++){
            if(!visited[i] && isValid(word, words[i])){
                visited[i] = true;
                queue.push([words[i], count+1]);
            }
        }
    }
    
    return 0;
}

// BFS <- 최소 단계