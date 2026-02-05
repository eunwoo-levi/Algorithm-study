function solution(n, lost, reserve) {
    let answer = 0;

    const Rlost = lost.filter(l=>!reserve.includes(l));
    const Rreserve = reserve.filter(r=>!lost.includes(r));
    
    const studentArr = Array.from({length: n+1}, ()=> 1);
    const reserveArr = Array.from({length: n+1}, ()=> false);
    
    studentArr[0] = 0;
    
    Rlost.sort((a,b)=> a-b);
    Rreserve.sort((a,b)=> a-b);
    
    for(const r of Rreserve){
        reserveArr[r] = true;
    }
    
    for(const l of Rlost){
        if(reserveArr[l-1] === true){
            reserveArr[l-1] = false;
            continue;
        }
        
        if(reserveArr[l+1] === true){
            reserveArr[l+1] = false;
            continue;
        }
        
        
        studentArr[l] -= 1;
    }
    
    for(let i=1; i<=n; i++){
        if(studentArr[i]>0)    answer+= 1;
    }
    
    return answer;
}