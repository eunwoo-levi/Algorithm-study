/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=2;
    if(nums.length<2){
        return nums.length;
    } 

    let index=2;

    for(let i=2; i<nums.length; i++){
        const cur = nums[i];
        if(nums[index-2]===cur && nums[index-1]===cur) continue;
        nums[index++] = cur;
        k++;
    }

    return k;
};