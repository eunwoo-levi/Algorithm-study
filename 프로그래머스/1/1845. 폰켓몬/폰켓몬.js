function solution(nums) {
    let res = 0;
    
    const set = new Set(nums);
    const size = set.size;
    
    if(nums.length/2>size){
        return size
    }
    else{
        return nums.length/2
    }
}