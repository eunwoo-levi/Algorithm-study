function solution(s) {
    let count_change = 0
    let count_zero = 0;
    
    let arr = s.split('')
    
    while(arr.length>1){
        count_change++;
        
        const newArr = arr.filter((a)=>a==='1')
        count_zero+= arr.length - newArr.length;
        
        let n = newArr.length;
        const binary = n.toString(2)
        arr = binary.split('')
    }
    
    
    return [count_change, count_zero];
}