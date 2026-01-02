/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = Math.floor(nums.length/2);
    const map = new Map();

    for(const x of nums){
        const c = (map.get(x) || 0) + 1;
        if(c>n) return x;
        map.set(x,c);
    }

};  