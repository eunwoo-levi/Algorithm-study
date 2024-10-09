function solution(friends, gifts) {
    const n = friends.length
    const giftPoints = new Array(n).fill(0)
    const index = {}
    const record = []
    const points = new Array(n).fill(0)

    for(let i=0;i<n;i++){
        record[i]=new Array(n).fill(0)
        index[friends[i]] = i
    }

    for(const gift of gifts){
        const [giver, taker] = gift.split(' ')
        record[index[giver]][index[taker]] +=1
        giftPoints[index[giver]] +=1
        giftPoints[index[taker]] -=1
    } 

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(record[i][j]>record[j][i]){
                points[i]+=1
            } 
            
            else if(record[i][j]===record[j][i]){
                if(giftPoints[i]>giftPoints[j]){
                    points[i]+=1
                }
            }
        }
    } 
     return Math.max(...points)
 }
 