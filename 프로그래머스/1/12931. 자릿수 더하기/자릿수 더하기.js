function solution(n)
{
    let res = 0;
    let k = n.toString()
    
    for(let i=0; i<k.length; i++){
        res+=+k[i]
    }
    
    return res;
}