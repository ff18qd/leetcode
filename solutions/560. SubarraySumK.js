/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    if (nums.length === 0) 
        return 0;
    
    let result = 0;
    for (let i = 0; i<nums.length; i++) {
        let sum = 0;
        // sum = nums[i];
        for (let j = 0; j<nums.length-i; j++) {
            sum += nums[i+j];
            if (sum === k) {
                result ++;
                break;
            }
        }
    }
  
    return result;
};

console.log(subarraySum([1,1,3], 2))
