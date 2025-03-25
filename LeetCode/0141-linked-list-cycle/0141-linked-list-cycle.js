/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    const values = [head.value];
    if(!head.next) return false;

    while(1){
        const nextNode = head.next;
        values.push(nextNode.value);

        if(!nextNode.next){
            return false;
        }

        if(values.includes(nextNode.value)){
            return true;
        }

    }
};