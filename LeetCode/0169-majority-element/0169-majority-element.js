/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const k = Math.floor(nums.length/2);
    nums.sort((a,b)=>a-b);

    let cnt=1;
    for(let i=1; i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            cnt++;
        }
        else{
            cnt=1;
        }

        if(cnt>k){
            return nums[i];
        }

    }

    return nums[0];
};