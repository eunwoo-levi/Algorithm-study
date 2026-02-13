// map1 => {key: 신고 당한 유저 ID, value: [신고한 사람 ID] }
// map2 => {key: 신고 당한 유저 ID,  value: 신고 당한 횟수}
// map2에서 횟수가 k번 이상일 경우 이것들만 담은 배열을 순환 
// d=> map1에서 그 key에 해당되는 신고한 사람들을 찾아서 id_list에 indexOf 해서 해당되는 answer 인덱스 ++ 하기

function solution(id_list, report, k) {
    var answer = Array.from({length: id_list.length}, ()=> 0);
    const idMap = new Map()
    const countMap = new Map()
    
    for(const r of report){
        const [give, get] = r.split(' ');
        
        if(!idMap.has(get) || !countMap.has(get)){
            idMap.set(get, []);
            countMap.set(get, 0);
        }
        
        const userArr = idMap.get(get);
        if(userArr.includes(give))   continue;
        
        idMap.get(get).push(give);
        countMap.set(get, countMap.get(get)+1)        
    }
    
    for(const [user, count] of countMap){
        if(count>=k){
            const reportUsers = idMap.get(user)
            for(const u of reportUsers){
                const idx = id_list.indexOf(u);
                answer[idx]++;
            }
        }
    }
    
    return answer;
}