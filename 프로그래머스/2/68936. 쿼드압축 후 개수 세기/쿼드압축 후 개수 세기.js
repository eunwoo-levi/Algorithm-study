function solution(arr) {
    const res = [0,0];
    
    const compress = (x,y, size)=>{
        const first = arr[y][x];
        let same = true;
        
        for(let i=y; i<y+size; i++){
            for(let j=x; j<x+size; j++){
                if(arr[i][j]!==first){
                    same = false;
                    break;
                }
            }
            if(!same)   break;
        }
        
        if(same){
            res[first]++;
        }
        else{
            const half = size/2;
            compress(x,y,half);
            compress(x+half,y,half);
            compress(x,y+half,half);
            compress(x+half, y+half, half);
        }
    }
    
    compress(0,0, arr.length)
    
    return res;
}