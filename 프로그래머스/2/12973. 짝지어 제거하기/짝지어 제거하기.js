function solution(s)
{
    const stack = []

    for(let i=0; i<s.length; i++){
        if(stack===0){
            stack.push(s[i]);
            continue;

        }
        if(stack.length!== 0 && stack[stack.length-1]===s[i]){
            stack.pop();
            continue;
        }
        stack.push(s[i])
    }

    if(stack.length===0){
        return 1;
    }
    
    return 0;
}