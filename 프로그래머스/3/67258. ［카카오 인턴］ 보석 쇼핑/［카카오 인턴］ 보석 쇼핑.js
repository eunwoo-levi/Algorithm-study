function solution(gems) {
    const results = [];
    const bags = new Map();
    const kinds = new Set(gems).size;
    
    for(let i=0; i<gems.length; i++){
        bags.delete(gems[i])
        bags.set(gems[i], i+1);
        
        if(bags.size===kinds){
            results.push([bags.values().next().value, i+1])
        }
    }
    
    results.sort((a,b)=>{
        if(a[1]-a[0] === b[1]-b[0]){
            return a[0] - b[0];
        }
        
        return a[1]-a[0] - (b[1]-b[0]);
    })
    
    return results[0];
}
// 투포인터
// 매핑값을 가지고 있는 변수의 크기는 모든 보석의 종류의 개수를 초과하지 않는다. 즉 보석의 종류가 4개라면, shoppingBag의 크기 역시 4를 초과할 수 없다.

// const s = new Set([10, 20, 30]);
// const it = s.values();
// it.next(); // { value: 10, done: false }
// it.next(); // { value: 20, done: false }
// it.next(); // { value: 30, done: false }
// it.next(); // { value: undefined, done: true }