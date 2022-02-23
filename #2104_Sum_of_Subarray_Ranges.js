/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
    var result = 0;
    
    for (let i =0; i < nums.length; i++) {
        var target = nums[i];
        var max = target;
        var min = target;
        
        for (let k= i+1; k < nums.length; k++) {
            max = Math.max(max, nums[k])
            min = Math.min(min, nums[k])
            
            result += max - min
        }
    }
    
    return result;
};