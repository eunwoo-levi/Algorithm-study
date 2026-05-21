from itertools import permutations
import math

def solution(numbers):
    answer = 0
    
    nums = set()
    
    for i in range(1, len(numbers)+1):
        perm = permutations(list(numbers), i)
        
        for p in perm:
            num = int(''.join(p))
            nums.add(num)
    
    for n in nums:
        if is_prime(n) == True:
            answer += 1
    
    
    return answer


def is_prime(n):
    if n < 2:
        return False
    
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    
    return True
        