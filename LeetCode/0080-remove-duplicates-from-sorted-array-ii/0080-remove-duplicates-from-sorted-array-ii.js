var removeDuplicates = function(nums) {
    let idx = 1; 
    let count = 1;  

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[idx++] = nums[i];
        }
    }

    return idx;  
};
