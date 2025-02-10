function solution(arr)
{
    const res = [arr[0]];
    
    for(let i=1; i<arr.length; i++){
        if(arr[i-1]===arr[i]){
            continue;
        }
        res.push(arr[i]);
    }
    
    return res;
}