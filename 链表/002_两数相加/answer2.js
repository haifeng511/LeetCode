/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 不使用头节点
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let list1 = l1;
    let list2 = l2;
    let templist ;
    let result ;
    let carry = 0; // 进位

    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    while (list1 || list2 || carry) {
        let sum = carry;

        if (list1) {
            sum += list1.val;
            list1 = list1.next;
        }

        if (list2) {
            sum += list2.val;
            list2 = list2.next;
        }

        carry = Math.floor(sum / 10); // 进位值

        sum = sum % 10;

        if (!templist) {
            // 第一次创建节点
            templist = new ListNode(sum);
            result = templist;
        } else {
            // 创建新节点
            templist.next = new ListNode(sum);
            // templist指向改变，result指向不变，所以最后返回的是result
            templist = templist.next;
        }

    }
    return result;

};
let l1_1 = new ListNode(2);
let l1_2 = new ListNode(4);
let l1_3 = new ListNode(3);
l1_1.next = l1_2;
l1_2.next = l1_3;
let l2_1 = new ListNode(5);
let l2_2 = new ListNode(6);
let l2_3 = new ListNode(4);
l2_1.next = l2_2;
l2_2.next = l2_3;
const input1 = l1_1;
const input2 = l2_1;
let result = addTwoNumbers(input1, input2);
console.log(result);