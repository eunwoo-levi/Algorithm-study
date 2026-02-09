// 1. key: id 기준으로 닉네임 담은 map 필요할 듯
// 2. 배열에 들어온 순서대로 [id, Enter | Leave] 하면 될듯

function solution(record) {
    var answer = [];
    
    const records = [];
    const userMap = new Map();
    
    for(r of record){
        const [type, id, name] = r.split(' ');
        if(type!=='Leave'){
            if(!userMap.has(id))    userMap.set(id, '');
            userMap.set(id, name);
        }
            
        if(type!=='Change')    records.push([id, type]);
    }
    
    for(r of records){
        const [id, type] = r;
        const name = userMap.get(id);
        if(type==='Enter'){
            answer.push(`${name}님이 들어왔습니다.`)
        }
        else{
            answer.push(`${name}님이 나갔습니다.`)
        }
    }
    
    return answer;
}