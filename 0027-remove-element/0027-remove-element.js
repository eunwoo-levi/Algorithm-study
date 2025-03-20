/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(1){
        const idx = nums.indexOf(val);
        if(idx===-1){
            break;
        }

        nums.splice(idx,1)
    }

};