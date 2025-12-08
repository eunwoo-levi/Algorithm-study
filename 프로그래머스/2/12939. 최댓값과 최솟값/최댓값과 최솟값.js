function solution(s) {
    const arr = s.split(' ').sort((a,b)=>a-b);
    return Math.min(...arr) +' ' + Math.max(...arr)
}