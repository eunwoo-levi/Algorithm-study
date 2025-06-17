// 노란색의 가로길이 x , 노란색의 세로 길이 y
// yellow = x*y
// brown = (x+2)*(y+2) - x*y  
// 위에 식은 brown = (x+2)*(y+2) - yellow 랑 같다

function solution(brown, yellow) {
    for(let x=1; x<=yellow; x++){
        if(yellow%x===0){
            let y = yellow / x;
            if(brown ===(x+2)*(y+2)-yellow){
                return [x+2, y+2].sort((a,b)=>b-a)
            }
        }
    }
    
    return [0,0];
}