function solution(nums) {
    const half = Math.floor(nums.length/2)
    const set = new Set(nums);
    
    
    return set.size >= half ? half : set.size
}