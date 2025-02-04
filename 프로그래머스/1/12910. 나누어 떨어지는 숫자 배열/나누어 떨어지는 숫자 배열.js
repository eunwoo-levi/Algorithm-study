function solution(arr, divisor) {
    let res = [];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]%divisor===0){
            res.push(arr[i])
        }
    }
    
    return res.length === 0 ? [-1] : res.sort((a,b)=>a-b)
}