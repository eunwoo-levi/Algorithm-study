function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n;i++){
        let sum = arr1[i] | arr2[i]
        
        let arr=""
        for(let j=0; j<n;j++){
            if(sum%2)   arr= "#" + arr
            else    arr =  " "+arr 
            sum = parseInt(sum/2);
        }
        
        answer.push(arr)
    }
    
    return answer;
}