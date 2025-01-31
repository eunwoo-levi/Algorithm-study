function solution(s) {
    
    const splitArr = s.slice(1,-1).split('},{')
    splitArr[0]=splitArr[0].slice(1)
    splitArr[splitArr.length-1] =  splitArr[splitArr.length-1].slice(0,splitArr[splitArr.length-1].length-1)
    
    const arr = splitArr.map(s=>s.split(',').map(Number)).sort((a,b)=>a.length - b.length)
    
    
    const set = new Set()
    
    arr.map(a=>{
        a.map(b=>{
            if(!set.has(b)){
                set.add(b)
            }
        })
    })
    
    return [...set]
    
}