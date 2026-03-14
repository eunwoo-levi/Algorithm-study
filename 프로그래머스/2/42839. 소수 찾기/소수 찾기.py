from itertools import permutations
import math

def solution(numbers):
    answer = 0
    
    nums = set()
    
    for i in range(1, len(numbers)+1):
        perm = permutations(list(numbers), i)       # permutations은 tuple을 반환함
        for p in perm:
            num = int(''.join(p))
            nums.add(num)
    
    for num in nums:
        if isPrime(num):
            answer += 1
    
    return answer

def isPrime(n):
    if n == 0 or n == 1:
        return False
    
    for i in range(2, int(math.sqrt(n))+1):
        if n%i == 0:
            return False
    
    return True