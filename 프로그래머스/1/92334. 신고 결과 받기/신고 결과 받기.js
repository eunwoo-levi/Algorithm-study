function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0)
    
    let rep = {}
    let repNum = {}
    
    for(let i=0; i<id_list.length; i++){
        rep[id_list[i]] = new Set();
        repNum[id_list[i]] = 0;
    }
    
    for(let i=0; i<report.length; i++){
        let temp = report[i].split(" ")
        if(!rep[temp[0]].has(temp[1])){
            rep[temp[0]].add(temp[1])
            repNum[temp[1]]++;
        }
    }
    
    for(let i=0; i<id_list.length;i++){
        for(let j of rep[id_list[i]]){
            if(repNum[j]>=k){
                answer[i]++;
            }
        }
    }
    
    
    return answer;
}