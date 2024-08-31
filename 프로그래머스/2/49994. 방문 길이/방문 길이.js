function check(nx, ny){
    return ny>=-5 && ny<=5 && nx>=-5 && nx<=5
}

function update(x,y,dir){
    switch(dir){
        case "U":
            return [x,y+1]
        case "D":
            return [x,y-1]
        case "L":
            return [x-1,y]
        case "R":
            return [x+1,y]
    }
}

function solution(dirs) {
    let x=0,y=0;
    let visited = new Set()
    
    for(const i of dirs){
        const [nx,ny] = update(x,y,i)
        
        if(!check(nx,ny))   continue;
        
        visited.add(`${x},${y},${nx},${ny}`);
        visited.add(`${nx},${ny},${x},${y}`);
        
        [x,y] = [nx,ny]
    }
    
    
    return visited.size/2;
}