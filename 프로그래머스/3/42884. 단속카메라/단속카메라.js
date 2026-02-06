function solution(routes) {
    var answer = 0;
    let camera = -30001
    
    routes.sort((a,b)=> a[1] - b[1]);
    console.log(routes)
    
    for(const [start, end] of routes){
        if(start>camera){
            camera = end;
            answer++;
        }
    }
    
    return answer;
}