function solution(n, t, m, p) {
    var answer = '';
    
    let game = ''
    for(let i=0; i<t*m; i++){
        const binary =  i.toString(n);
        game+=binary;
    }
    
    let idx = 0;
    while(answer.length!==t){
        if(Math.floor(idx%m)===p-1) answer += game[idx];
        idx++;
    }
    
    
    return answer.toUpperCase();
}