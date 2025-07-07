function solution(s) {
    var answer = [];
    
    s= s.slice(2, -2).split('},{');
    
    s.sort((a,b)=>a.length-b.length)
    
    const set = new Set();
    
    
    for(a of s){
        a = a.split(',').map(Number);
        
        for(b of a){
            if(!set.has(b)){
                answer.push(b);
                set.add(b);
            }
                
        }
    }
    
    return answer;
}