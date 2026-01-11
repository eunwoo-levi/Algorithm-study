function solution(routes) {
    var answer = 0;
    let camera = -300001;
    
    routes.sort((a,b)=>
               a[1]-b[1]);
    
    routes.forEach(r=>{
        if(r[0]>camera){
            answer++;
            camera = r[1]; 
        }
    })
    
    return answer;
}