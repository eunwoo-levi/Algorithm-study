def solution(s):
    stack = []
    
    if s[0] == ')':
        return False
    
    for c in s:
        if c == '(':
            stack.append(c)
            
        else:
            if(len(stack) == 0):
                return False
            
            p = stack.pop()
            if(p == ')'):
                return False  
            
    if len(stack) != 0:
        return False
            
    return True