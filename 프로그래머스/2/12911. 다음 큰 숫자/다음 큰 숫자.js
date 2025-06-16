function solution(n) {
    const n_one = n.toString(2).split('').filter(a=>a==='1').length;
    let k = n+1;
    while(1){
        const k_one = k.toString(2).split('').filter(a=>a==='1').length;
        if(k_one === n_one) return k;
        k++;
    }
}