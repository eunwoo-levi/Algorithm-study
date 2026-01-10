function solution(n) {
    const ones = n.toString(2).split('').filter(a=>a==='1').length;
    let k = n+1;
    while(k){
        const anotherOnes = k.toString(2).split('').filter(a=>a==='1').length;
        if(ones===anotherOnes)  return k;
        k++;
    }
}