/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let idx = 0;
    let n = nums.length;
    while(idx<n-1){
        if(nums[idx]===nums[idx+1]){
            nums.splice(idx+1,1);
            n--;
        }
        else{
            idx++;
        }
    }

    return n;
};