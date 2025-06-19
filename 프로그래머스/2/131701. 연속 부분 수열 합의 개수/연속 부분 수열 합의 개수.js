// 원형 큐
function solution(elements) {
    const circular = elements.concat(elements);
    const set = new Set();

    for(let i=0; i<elements.length; i++){
        for(let j=0; j<elements.length; j++){
            const sum = circular.slice(i, i+j).reduce((acc,cur)=>acc+cur,0);
            set.add(sum);
        }
    }
    
    return set.size
}