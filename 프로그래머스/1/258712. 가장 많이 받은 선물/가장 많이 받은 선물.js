function solution(friends, gifts) {
    const N = friends.length;
    
    const giftPoints = Array.from({length: N}, ()=> 0);
    const records = Array.from({length: N}, ()=> Array.from({length: N}, ()=> 0));
    const points = Array.from({length: N}, ()=> 0);

    for(const gift of gifts){
        const [giver, taker] = gift.split(" ");
        const giverIndex = friends.indexOf(giver);
        const takerIndex = friends.indexOf(taker);
        
        records[giverIndex][takerIndex] += 1;
        giftPoints[giverIndex] += 1;
        giftPoints[takerIndex] -= 1;
    }

    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(records[i][j] > records[j][i]){
                points[i] += 1;
            }
            else if(records[i][j]===records[j][i]){
                if(giftPoints[i] > giftPoints[j]){
                    points[i] += 1;
                }
            }
        }
    }
    
    return Math.max(...points);
}
// 시뮬레이션(구현)