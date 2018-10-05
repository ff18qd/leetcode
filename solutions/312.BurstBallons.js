/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let n = nums.length;
    // add nums[-1] and nums[n] to consist of a new array nums 
    nums.push(1);
    nums.unshift(1);
    
    const c = new Array(n+2);
    // create 2D array
    for (let i = 0; i < n+2; i++) {
        c[i] = (new Array(n+2)).fill(0)
    }
    
    for (let l = 1; l <=n; l++) {
        for (let i = 1; i <=n+1-l; i++) {
            let j = i+l-1;
            for (let k=i; k<=j; k++) {
                c[i][j]=Math.max(c[i][j], c[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + c[k+1][j])
            }
        }
    }
    
    return c[1][n];
    
};
