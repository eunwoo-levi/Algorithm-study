/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const l=0; r=numbers.length-1;

    while(l<r){
        const sum = numbers[l]+numbers[r];
        if(sum===target)  return [l+1, r+1];
        if(sum<target)  l++;
        else if(sum>target)     r--;
    }
};