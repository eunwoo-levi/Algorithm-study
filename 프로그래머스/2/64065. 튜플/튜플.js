function solution(s) {
    var answer = [];
    
    const arr = s.slice(2, -2).split('},{');
    
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].split(',').map(Number);
    }
    
    arr.sort((a,b)=> a.length- b.length);
    
    const set = new Set()
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            set.add(arr[i][j]);
        }
    }    
    
    return [...set];
}