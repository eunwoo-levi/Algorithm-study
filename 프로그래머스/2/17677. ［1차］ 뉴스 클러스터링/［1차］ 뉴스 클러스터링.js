// 합집합은 B 에서 A 원소에 속해있으면 해당껄 지우고, for문 마지막에 B에 남은 원소를 다 A에 넣으면 됌
// 교집합은 위에서 지운것들 모두

function solution(str1, str2) {
    var answer = 0;
    const intersection = [], union = [];
    
    if(str2.length > str1.length)   [str1, str2] = [str2, str1];
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    // 유효한 쌍만 필터한 각 배열 생성
    let arrA = [], arrB = [];
    for(let i=0; i<str1.length-1; i++){
        const sliced = str1.slice(i, i+2);
        if(isAlpha(sliced))    arrA.push(sliced);
    }
    for(let i=0; i<str2.length-1; i++){
        const sliced = str2.slice(i, i+2);
        if(isAlpha(sliced))    arrB.push(sliced);
    }
    
    // union, intersection 구하기
    for(let i=0; i<arrA.length; i++){
        const idx = arrB.indexOf(arrA[i]);
        if(idx!==-1){
            intersection.push(...arrB.splice(idx, 1));
        }
    }
    union.push(...arrA, ...arrB);
    
    if(intersection.length===0 && union.length === 0)   return 65536;
    return parseInt(intersection.length/union.length * 65536);
}

function isAlpha(s){
    for(let i=0; i<s.length; i++){
        if('A'> s[i] || s[i] > 'Z')   return false;
    }
    
    return true;
}