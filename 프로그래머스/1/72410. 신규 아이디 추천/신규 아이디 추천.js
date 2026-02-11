function solution(new_id) {
    const specialChar = ['-', '_', '.'];
    
    // 1단계
    new_id = new_id.toLowerCase();
    // 2단계
    const secondTemp = [];
    for(let i=0; i<new_id.length; i++){
        if(new_id[i]>='a' && new_id[i]<='z' || new_id[i] >= '0' && new_id[i] <= '9'
          || specialChar.includes(new_id[i])){
            secondTemp.push(new_id[i]);
        }
    }
    new_id = secondTemp.join('');
    // 3단계
    let count=0
    const thirdTemp = [];
    for(let i=0; i<new_id.length; i++){
        if(new_id[i]==='.' && count===0)    thirdTemp.push(new_id[i]);
        if(new_id[i]!=='.'){
            thirdTemp.push(new_id[i]);
            if(count!==0)   count = 0;
        }
        else    count++;
    }
    new_id = thirdTemp.join('');
    // 4단계
    if(new_id[0]==='.') new_id = new_id.slice(1);
    else if(new_id[new_id.length-1]==='.')  new_id = new_id.slice(0, -1);
    // 5단계
    if(new_id.length===0)   new_id = 'a';
    // 6단계
    if(new_id.length >= 16) new_id = new_id.slice(0, 15);
    if(new_id[new_id.length-1]==='.')   new_id = new_id.slice(0, -1);
    // 7단계
    if(new_id.length<=2)    new_id += new_id[new_id.length-1].repeat(3-new_id.length);
    
    return new_id;
}