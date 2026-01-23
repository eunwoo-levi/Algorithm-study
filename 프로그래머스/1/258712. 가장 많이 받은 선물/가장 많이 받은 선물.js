function solution(friends, gifts) {
   const n = friends.length
   const giftPoints = Array.from({length: n}, ()=>0)
    const record = Array.from({length: n}, ()=>Array.from({length: n}, ()=>0));
   const points = Array.from({length: n}, ()=>0)
   

    
   for(const gift of gifts){
       const [giver, taker] = gift.split(' ')
       record[friends.indexOf(giver)][friends.indexOf(taker)] +=1
       giftPoints[friends.indexOf(giver)] +=1
       giftPoints[friends.indexOf(taker)] -=1
   } 
    
   for(let i=0;i<n;i++){
       for(let j=0;j<n;j++){
           if(record[i][j]>record[j][i]){
               points[i]+=1
           } else if(record[i][j]===record[j][i]){
               if(giftPoints[i]>giftPoints[j]){
                   points[i]+=1
               }
           }
       }
   } 
    return Math.max(...points)
}

// 시뮬레이션(구현)