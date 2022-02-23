/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var map = new Map()
    var longestLength = 0;
    var tempLength = 0;
    
    for (let i=0; i < s.length; i++) {
        var elementLastSeen = map.get(s[i])
        
        if (elementLastSeen == undefined) {
            map.set(s[i], i)
            tempLength++
        }
        else {
            map = new Map([...map].filter(([k,v]) => v >= elementLastSeen + 1))
            map.set(s[i], i)
            tempLength = i - elementLastSeen
        }
        
        longestLength = Math.max(tempLength, longestLength)
    }
    
    return longestLength
    
};