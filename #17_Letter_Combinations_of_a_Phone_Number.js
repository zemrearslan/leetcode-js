/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    var map = new Map([
     ["2", ["a", "b", "c"]],
     ["3", ["d", "e", "f"]],
     ["4", ["g", "h", "i"]],
     ["5", ["j", "k", "l"]],
     ["6", ["m", "n", "o"]],
     ["7", ["p", "q", "r", "s"]],
     ["8", ["t", "u", "v"]],
     ["9", ["w", "x", "y", "z"]]
    ])
    
    var result = []
    
    for (let i = 0; i < digits.length; i+=2) {
        var digit = digits[i]
        var nextDigit = digits[i+1]
        
        if (nextDigit) {
            var newCombination = combine(map.get(digit), map.get(nextDigit))
            result = combine(result, newCombination)
        }
        else {
            result = combine(result, map.get(digit))
        }  
    }
    
    return result 
};

function combine(first, second) {
    var result = []
    if (first.length == 0) {
        return second
    }
    
    for (let i =0; i < first.length; i++) {
        for (let k =0; k < second.length; k++) {
            result.push(first[i] + second[k])
        }
    }
    
    return result
}