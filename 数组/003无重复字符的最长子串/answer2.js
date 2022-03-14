/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   const window = {};
  for (const c of s) {
    window[c] = 0;
  }
//   经过这部分处理之后 window的值是：{ a: 0, b: 0, c: 0 }
//   console.log(window);

  let left = 0,
    right = 0;
  let result = 0; // 记录结果
  while (right < s.length) {
    // c 是将移入窗口的字符
    const c = s[right];
    // 右移窗口
    right++;

    // 进行窗口内数据的一系列更新
    window[c]++;
    console.log(window[c],'after');

    // 判断左侧窗口是否要收缩
    while (window[c] > 1) {
      // d 是将移出窗口的字符
      const d = s[left];
      // 左移窗口
      left++;

      // 进行窗口内数据的一系列更新
      window[d]--;
    }

    // 在这里更新答案
    result = Math.max(result, right - left);
  }

  return result;
}; 

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('aab'))