function solution(n, m, section) {
    var res = 0;
    let painted = 0;
    
    for(let i=0; i<section.length; i++){
        if(painted<section[i]){
            painted= section[i] + m - 1;
            res++;
        }
    }
    
    return res;
}