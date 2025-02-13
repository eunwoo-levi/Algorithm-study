function solution(n, arr1, arr2) {
    const res = [];
    
    for(let i=0; i<n; i++){
        const arrSum = arr1[i] | arr2[i]
        let binary = arrSum.toString(2).padStart(n, '0')
        let decode = ''
        
        
        console.log(binary)
        for(let j=0; j<n; j++){
            if(binary[j]==='1'){
                decode+='#'
            }
            else{
                decode+=' '
            }
        }
        res.push(decode);
    }
    
    
    return res
}