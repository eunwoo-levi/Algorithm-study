function solution(begin, target, words) {
    const N = words.length;
    const visited = Array.from({length: N}, ()=>false);
    const queue = [[begin, 0]];
    
    let head = 0;
    while(head<queue.length){
        const [word, count] = queue[head++];
        if(word===target)   return count;
        
        for(let i=0; i < N; i++){
            if(!visited[i] && isValid(word, words[i])){
                visited[i] = true;
                queue.push([words[i], count + 1])
            }
        }
    }
    
    
    return 0;
}

function isValid(A, B){
    let diff = 0;
    for(let i=0; i<A.length; i++){
        if(A[i]!==B[i]) diff++;
    }
    
    return diff === 1;
}