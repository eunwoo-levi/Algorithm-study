const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    var answer = 0;
    
    for(let i=0; i<numbers.length; i++){
        s = s.split(numbers[i]);
        s = s.join(i);
    }
    
    return Number(s);
}