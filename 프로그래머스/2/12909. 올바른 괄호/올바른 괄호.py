def solution(s):
    stack = []
    
    for i in range(len(s)):
        c = s[i]
        
        if c=='(':
            stack.append(c)
        else:
            if len(stack) == 0:
                return False
            last = stack.pop()
            if last == ')':
                return False
    
    if len(stack) != 0:
        return False

    return True