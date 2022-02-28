/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

    var current = head
    var length = 0
    while (current != null) {
        length++
        current = current.next
    }
    
    if (length == n) {
        return head.next
    }
    
    var nodeBeforeDeletedIndex = length - n - 1
    
    var previousNode = head
    while (nodeBeforeDeletedIndex != 0) {
        previousNode = previousNode.next
        nodeBeforeDeletedIndex--
    }

    
    previousNode.next = previousNode.next.next
    
    return head
    
};