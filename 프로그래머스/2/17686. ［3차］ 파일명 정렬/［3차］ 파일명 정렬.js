// HEAD: 문자로만 이루어져있음 (최소 1글자 이상)
// NUMBER: 1-5 사이 연속된 숫자 (앞 0 포함)
// TAIL: 이후 나머지 (아무 글자 없을수도 있음)
// 1. Head 기준으로 정렬 (대-소문자 구분 X)
// 2. Head 같을 경우 -> NUMBER의 숫자 순 정렬  (숫자 앞 0 무시)
// 3. Head, Number 같은 경우 입력에 주어진 순서 유지

function solution(files) {
    var answer = [];
    const arr = [];
    
    for(let i=0; i<files.length; i++){
        const file = files[i].toUpperCase();
        
        let charIdx = 0, numIdx = 0;
        
        while(file[charIdx]<'0' || file[charIdx] > '9')   charIdx++;
        const head = file.slice(0, charIdx);
        
        numIdx = charIdx;
        while(file[numIdx] >= '0' && file[numIdx] <= '9')   numIdx++;
        const number = file.slice(charIdx, numIdx);
        
        arr.push([head, Number(number) , i]);
    }
    
    arr.sort((a,b)=>{
        if(a[0]===b[0]){
            if(a[1]===b[1])     return a[2] - b[2];
            return a[1] - b[1];
        }
        
        return a[0].localeCompare(b[0]);
    })
        
    for(let i=0; i<arr.length; i++){
        answer.push(files[arr[i][2]]);
    }
    
    return answer;
}