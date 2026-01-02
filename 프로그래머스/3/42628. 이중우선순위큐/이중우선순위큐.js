function solution(operations) {
    const queue = [];
    
    for (let op of operations){
        const [a, b] = op.split(" ");
        
        if(a==='I'){
            queue.push(Number(b));
            queue.sort((a,b)=>a-b);
        }
        
        else{
            if(b==="1") queue.pop();
            else    queue.shift();
        }
        
    }
    
    return queue.length===0 ? [0,0] : [queue[queue.length-1], queue[0]];
}