function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        const rawBinary = (arr1[i] | arr2[i]).toString(2);
        const binary = rawBinary.padStart(n, '0');
        answer.push(binary);
    }
    
    for(let i=0; i<n; i++){
        const arr = answer[i].split("1");
        const s = arr.join("#");
        const arr2 = s.split("0");
        const s2 = arr2.join(" ");
        answer[i] = s2;
    }
    

 
 
    
    return answer;
}