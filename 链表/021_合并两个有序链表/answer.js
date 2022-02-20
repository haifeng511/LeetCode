/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let  mergeTwoLists = function(list1, list2) {
    let node1 = list1;
    let node2 = list2;
    let templist = new ListNode(-1);
    let result = templist;

    // 这里只需要走完一条链表
    while(node1 && node2){
        // 首先先比较，取更小值,将较小的指针链接到临时节点
        if (node1.val < node2.val) {
            templist.next = new ListNode(node1.val); 
            // templist.next = node1; // 上方代码可替换
            node1 = node1.next
        }else{
            templist.next = new ListNode(node2.val); 
            // templist.next = node2;
            node2 = node2.next
        }

        templist = templist.next;
        // console.log(templist);
        // console.log(result);

    }
     // 最后一个节点为空时进行赋值给templist
    templist.next = node1 ? node1 : node2;

    return result.next;
};

let l1_1 = new ListNode(1);
let l1_2 = new ListNode(2);
let l1_3 = new ListNode(4);
l1_1.next = l1_2;
l1_2.next = l1_3;
let l2_1 = new ListNode(1);
let l2_2 = new ListNode(3);
let l2_3 = new ListNode(4);
l2_1.next = l2_2;
l2_2.next = l2_3;
const input1 = l1_1;
const input2 = l2_1;
let result = mergeTwoLists(input1, input2);
console.log(result);