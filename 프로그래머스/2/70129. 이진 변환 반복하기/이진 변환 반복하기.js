function solution(s) {
    let count_zero = 0, count = 0;
    while(s!=='1'){
        s = s.split('').filter(a=>{
            if(a==='0'){
                count_zero++;
                return false;
            }
            else return true;
        });
        count++;
        s=s.join('');
        s=s.length.toString(2);
    }
    
    return [count, count_zero];
}