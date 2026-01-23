function solution(jobs) {
    var answer = 0;
    const PQ = [];
    let time=0, i=0;
    
    jobs.sort((a,b)=>a[0]-b[0]);
    
    while(PQ.length > 0 || i < jobs.length){
        if(jobs.length > i && jobs[i][0] <= time){
            PQ.push(jobs[i++]);
            PQ.sort((a,b)=>a[1]-b[1]);
            continue;
        }
        
        
        if(PQ.length > 0){
            const [start, work] = PQ.shift();
            answer += time - start + work;
            time += work;
        }
        
        else if(PQ.length == 0){
            time = jobs[i][0];
        }
    }
    
    
    
    return parseInt(answer/jobs.length);
}