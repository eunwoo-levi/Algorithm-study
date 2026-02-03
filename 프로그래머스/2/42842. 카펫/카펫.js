// 노란색의 가로길이 x , 노란색의 세로 길이 y
// yellow = x*y
// brown = (x+2)*(y+2) - x*y  
// 위에 식은 brown = (x+2)*(y+2) - yellow 랑 같다

function solution(brown, yellow) {
    for(let x=1; x<=yellow; x++){
        if(yellow%x===0){
            let y = yellow / x;
            if(x*y === yellow){
                if((x+2)*(y+2) - yellow === brown){
                    if(x<y) [x, y] = [y, x];
                    return [x+2, y+2];
                }
            }
        }
    }
}