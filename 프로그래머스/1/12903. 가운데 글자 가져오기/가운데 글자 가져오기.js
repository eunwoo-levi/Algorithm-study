function solution(s) {
    if(s.length%2===0){
        return s.slice((s.length-1)/2, (s.length-1)/2+2)
    }
    else{
        return s[(s.length-1)/2]
    }
}