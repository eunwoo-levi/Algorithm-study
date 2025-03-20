var removeDuplicates = function(nums) {
    let uniqueIndex = 1;  // Start from the second element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }

    
    return uniqueIndex;
};