function solution(elements) {
    let res = 0;
    
    const circularArr = elements.concat(elements)
    const sumSet = new Set();
    
    for(let n=1; n<=elements.length; n++){
        for(let i=0; i<elements.length;i++){
            const sum = circularArr.slice(i, i+n).reduce((acc,cur)=>acc+cur, 0);
            sumSet.add(sum);
        }
    }
    
    return sumSet.size
}