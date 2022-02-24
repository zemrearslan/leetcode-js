/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {    
    var longest = ""
    for (var i = 0; i < s.length; i++) {
        var palindrome_1 = expand(s, i, i)
        var palindrome_2 = expand(s, i, i+1)
        
        if (palindrome_1.length > longest.length) {
            longest = palindrome_1
        }
        if (palindrome_2.length > longest.length) {
            longest = palindrome_2
        }
        
    }
    return longest
};


function expand(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return s.slice(left + 1, right)
}