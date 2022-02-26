/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
   
    var startIndex = 0
    var endIndex = height.length - 1
    var _maxArea = -1
    
    while (startIndex < endIndex) {
        var start = height[startIndex]
        var end = height[endIndex]
        
        _maxArea = Math.max(_maxArea, calculateArea(startIndex, endIndex, height))
        
        if (start < end) {
            startIndex++
        }
        else {
            endIndex--
        }
    }
    
    return _maxArea
    
};


function calculateArea(firstIndex, lastIndex, height) {
    var firstY = height[firstIndex]
    var lastY = height[lastIndex]
    
    var y = Math.min(firstY, lastY)
    var x = Math.abs(firstIndex - lastIndex)
    
    return x * y
    
}