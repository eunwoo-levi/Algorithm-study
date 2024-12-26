function solution(friends, gifts) {
   const n = friends.length
   const giftPoints = new Array(n).fill(0)
   const record = Array.from({length:friends.length}, ()=>Array(friends.length).fill(0))
   const points = new Array(n).fill(0)
   
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