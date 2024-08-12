function solution(arr) {
    
    let Min = arr.findIndex(e=>e===Math.min(...arr))
    arr.splice(Min,1)
    
    return arr.length===0?[-1]:arr
}