// hash
function solution(clothes) {
    var answer = 1;
    const map = {};
    
    for(let [item, category] of clothes){
        map[category] = map[category] ? [...map[category], item] : [item];
    }
    
    console.log(map)
    
    Object.values(map).forEach(v=>{
        answer*=v.length+1
    })
    
    
    return answer-1;
}