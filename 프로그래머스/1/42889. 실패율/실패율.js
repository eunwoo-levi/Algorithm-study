function solution(N, stages) {
    const res = []
    
    for(let i=1; i<=N; i++){
        const totalUser = stages.filter((x)=>x>=i).length;
        const curUser = stages.filter((x)=>x===i).length;
        res.push([curUser/totalUser, i]);
    }
    
    res.sort((a,b)=>b[0]-a[0]);
    
    return res.map((a)=>a[1])
}