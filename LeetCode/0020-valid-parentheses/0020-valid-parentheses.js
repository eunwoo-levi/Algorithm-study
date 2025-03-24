/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let i=0; i<s.length; i++){
        if(s[i]===')' || s[i]==='}' || s[i]===']'){{
            if(stack.length!==0){
                const close = stack.pop();
                if(s[i]===')' && close==='(' || s[i]==='}' && close==='{' || s[i]===']' && close==='['){
                    continue;
                }
                return false;
            }
            else{
                return false;
            }
        }}
        else{
            stack.push(s[i]);
        }
    }

    if(stack.length===0){
        return true;
    }

    return false;
};