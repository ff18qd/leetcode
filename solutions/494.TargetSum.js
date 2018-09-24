/**
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you 
 * have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 */
 
/** 
 * Input: nums is [1, 1, 1, 1, 1], S is 3. 
 * Output: 5
 * Explanation: 

 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3

 * There are 5 ways to assign symbols to make the sum of nums be target 3.
*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
     let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    if (sum < Math.abs(S)) return 0;
    const offset =  sum;
    let ways=new Array(nums.length + 1);
    for (let i = 0 ; i < nums.length+1; i++) {
        ways[i] = new Array(2*sum + 1).fill(0)
    }
    
    ways[0][offset] = 1;
    // console.log(ways)
    for (let i = 0; i < nums.length; i++) {
        for(let j = nums[i]; j < 2*sum + 1 - nums[i]; j++) {
            if(ways[i][j]) {
                ways[i+1][j+nums[i]] += ways[i][j];
                ways[i+1][j-nums[i]] += ways[i][j];
            }
        }
    }
    // console.log(ways);
    return ways[nums.length][S+offset];
    
};