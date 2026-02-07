function solution(N, stages) {
    var answer = [];
    
    const stageArr = Array.from({length: N+1}, ()=> 0);
    const failArr = Array.from({length: N+1}, ()=> 0);
    
    
    for(const stage of stages){
        // 각 스테이지 마다 클리어한 총원 구하기
        for(let i=1; i<=stage; i++){
            stageArr[i]++;
        }
        
        // 각 스테이지에 실패한 사람
        failArr[stage]++;
    }
    
    // answer: [stage 번호, 실패율]
    for(let i=1; i<=N; i++){
        if(stageArr[i] === 0)   answer.push([i, 0]);
        else {
            const failPercent = failArr[i]/stageArr[i]
            answer.push([i, failPercent]);
        }
    }
    
    console.log('stageArr',stageArr)
    console.log('failArr',failArr)
    
    answer.sort((a,b)=>{
        if(a[1]===b[1]) return a[0] - b[0];
        return  b[1] - a[1];
    })
    
    return answer.map(a=>a[0]);
}
