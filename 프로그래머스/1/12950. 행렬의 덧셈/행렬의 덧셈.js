function solution(arr1, arr2) {
    const res = [];
    
    for(let i=0; i<arr1.length; i++){
        const temp=[];
        for(let j=0; j<arr1[0].length; j++){
            temp.push(arr1[i][j]+arr2[i][j])
        }
        
        res.push(temp);
    }
    
    return res;
}