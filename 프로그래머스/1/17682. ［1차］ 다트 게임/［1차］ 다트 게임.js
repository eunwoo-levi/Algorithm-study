function solution(dartResult) {
    const arr = [];
    
    let number = '';
    
    for(let i=0; i<dartResult.length; i++){
        const select = dartResult[i];
        
        // 숫자인 경우
        if(select>='0' && select<='9')  number+=select;
        // 2) S 또는 D 또는 T 인 경우
        else if(select==='S' || select==='D' || select==='T'){
            switch(select){
                case 'S':
                    arr.push(Number(number));
                    break;
                case 'D':
                    arr.push(Math.pow(Number(number), 2));
                    break;
                case 'T':
                    arr.push(Math.pow(Number(number), 3));
                    break;
            }
            number = '';
        }
        // 3) * 또는 # 인 경우
        else {
            if(select==='*'){
                if(arr.length===1)  arr[arr.length-1] *= 2;
                else{
                    arr[arr.length-2] *= 2;
                    arr[arr.length-1] *= 2;
                }
            }
            else if(select==='#'){
                arr[arr.length-1] *= -1;
            }
        }
    }
    
    return arr.reduce((acc, cur)=> acc + cur, 0);
}