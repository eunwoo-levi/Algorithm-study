/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = Math.floor(nums.length/2);
    let count = 1;

    nums.sort((a,b)=> a-b);

    for(let i=1; i<nums.length; i++){
        if(count>n) return nums[i-1];
        if(count[i-1]!==count[i])   count=1;
        count++;
    }

    return nums[0];
};