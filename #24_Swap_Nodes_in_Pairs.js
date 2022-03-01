/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    
    var current = head
    var previous = null
    
    while (current != null) {
        var next = current.next

        if (next == null) {
            break
        }
        current.next = next.next
        next.next = current
        
        if (previous != null){
            previous.next = next
        }
        else {
            head = next
        }
      
        previous = current
        current = current.next
    }
    
    return head
};