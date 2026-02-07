const numbers1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const numbers2 = ["0","1","2","3","4","5","6","7","8","9"]

function solution(s) {
    var answer = 0;
    
    for(let i=0; i<numbers1.length; i++){
        while(s.includes(numbers1[i])){
            s = s.replace(numbers1[i], numbers2[i]);
        }
    }
    
    return Number(s);
}