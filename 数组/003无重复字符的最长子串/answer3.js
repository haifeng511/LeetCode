/**
 * 代码逻辑：
1、创建一个set, 用来存放最长子串
2、创建两个指针，left指向字符串开头，right随着for循环遍历字符串
3、for循环内部进行判断，如果set里面没有right指向的字符，则还没有重复的字符，将right指向字符添加到set中，
    更新最大子串的长度，也就是原来的result和现在的set大小进行比较，取最大值
4、如果set里面存在right指向的字符，则从set里删除left所指向的字符，缩小窗口，并且递增left，
    直到set里面没有right所指向的字符为止。这里需要注意的是缩小窗口需要使用while，不然只会执行一次
5、重复3和4，直到遍历完字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let result = 0, left = 0, right = 0;

    for (; right < s.length; right++) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            result = Math.max(result, set.size);
        } else {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right])
        }

    }

    return result;

};