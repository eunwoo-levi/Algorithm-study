function solution(priorities, location) {
    var answer = 0;
    const map = {};
    
    for(let i=0; i<priorities.length; i++){
        map[i] = priorities[i];
    }
    
    const processes = Object.entries(map);
    
    while(processes.length!==0){
        const first = processes.shift();
        
        const flag = processes.filter(p=>p[1]>first[1]);
        if(flag.length!==0){
            processes.push(first);
        }
        else{
            answer++;
            if(Number(first[0])===location){
                return answer;
            }
        }
    }
    
    
    return answer;
}