function solution(numbers) {
    const res = numbers.map(String).sort((a,b)=>(b+a)-(a+b)).join("");

    return res[0]==="0"?"0":res;
}