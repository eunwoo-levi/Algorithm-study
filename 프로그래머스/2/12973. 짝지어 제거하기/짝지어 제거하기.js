function solution(s)
{
    let stack = []

    for(let i=0; i<s.length;i++){
        if(stack.length===0){
            stack.push(s[i]);
            continue;
        }
        
        else{
            if(s[i]===stack[stack.length-1]){
                stack.pop()
                continue;
            }
        }
        
        stack.push(s[i])
    }
    
    if(stack.length===0){
        return 1;
    }

    return 0;
}