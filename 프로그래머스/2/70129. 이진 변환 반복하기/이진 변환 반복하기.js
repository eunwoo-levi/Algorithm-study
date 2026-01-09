function solution(s) {
    let count=0, zeros = 0;
    let string = s;
    
    while(string!=='1'){
        const one = string.split("").filter(a=>a==='1').join("");
        zeros += string.length - one.length;
        count++;
        string = one.length.toString(2)
    }
    
    return [count, zeros]
}