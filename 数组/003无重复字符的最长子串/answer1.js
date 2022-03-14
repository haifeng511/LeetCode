/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   let left = 0; // 窗口左边
   let right = 0; // 窗口右边
   let result = 0; // 结果
   

   while(right < s.length){
    //   先进行窗口右边右移
       right++;
    //    通过截取字符串获取现在窗口,注意这里是左闭右开截取不包含s[right]
       let windowstr = s.slice(left,right);
    //    找到当前右移，即将要移入窗口的字符
       let temp = s[right]; 
    //    如果窗口中包含新增的数据，要收缩窗口
       if(windowstr.indexOf(temp) !== -1){
        //    窗口左边的数据移出去
        left += windowstr.indexOf(temp) + 1;
       }
       result = Math.max(result,windowstr.length);
     
   }
return result;
}; 

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('aab'))