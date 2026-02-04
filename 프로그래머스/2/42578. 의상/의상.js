function solution(clothes) {
    let answer = 1;
    const map = new Map();
    
    for(const [item , type] of clothes){
        if(map.has(type)){
            map.get(type).push(item);
        }
        else    map.set(type, [type]);
    }
    
    const clothesValue = [...map.values()];
    
    for (const v of clothesValue){
        answer *= v.length+1;
    }
    
    return answer - 1;
}