/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var map = new Map()
    for (let i=0; i < nums.length; i++) {
        var num = nums[i]
        var target = 0 - num
        
        var twoSums = findTwoSums(target, nums.slice(i+1)) 
        twoSums.forEach(function(i) {
            i.push(num)
            i = i.sort()
            map.set(i.toString(), 1)
        })
    }
    var result = []
    Array.from(map.keys()).forEach(function(i) { 
        var arr = i.split(",") 
        arr.map(k=> parseInt(k))
        result.push(arr)
    })
    return result
    
};

function findTwoSums(target, arr) {
    var map = new Map()
    var result = []
    
    for (let i =0; i < arr.length; i++) {
        var element = arr[i]
        var targetElement = target - element
        
        if (map.get(targetElement)) {
            result.push([element, targetElement])
        }
        
        if (!map.get(element)) {
            map.set(element, 1)
        } 
    }
    
    return result
}



