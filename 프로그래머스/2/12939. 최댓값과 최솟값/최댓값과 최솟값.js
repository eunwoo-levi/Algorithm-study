function solution(s) {
    let res = ''
    let arr = []
    const sortedArr = s.split(' ').sort((a,b)=>a-b)
    arr.push(sortedArr[0], sortedArr[sortedArr.length-1])
    res = arr.join(' ')
    return res
}