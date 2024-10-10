function solution(id_list, report, k) {
    var answer = [];
    
    const reports = [...new Set(report)].map((a)=>a.split(" "))
    
    const bads= new Map();
    const reporter = new Map();

    reports.forEach((v)=>{
        bads.set(v[1], bads.get(v[1])+1 || 1);      // v[1]: 신고 당한 사람
    })
    
    for(let report of reports){
        if(bads.get(report[1])>=k){
            reporter.set(report[0], reporter.get(report[0])+1 || 1)
        }
    }
    
    return id_list.map((a)=>reporter.get(a) || 0)
    
    
    
    
    
    return answer;
}