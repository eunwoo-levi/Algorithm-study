function solution(dirs) {
    const visited = new Set()
    let x=0, y=0;
    
    
    for(let i=0; i<dirs.length; i++){
        const [nx, ny] = update(x,y, dirs[i])

        if(nx>=-5 && nx<=5 && ny>=-5 && ny<=5){
            visited.add(`${x},${y},${nx},${ny}`);
            visited.add(`${nx},${ny},${x},${y}`);
            [x, y] = [nx, ny]
        }
    }
    
    return visited.size/2;
}

function update(x,y, dir){
    if(dir==='U'){
        return [x,y+1]
    }
    else if(dir==='D'){
        return [x, y-1]
    }
    else if(dir==='R'){
        return [x+1 , y]
    }
    else{
        return [x-1, y];
    }
}