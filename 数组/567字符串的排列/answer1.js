/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
     // s2中是否包含s1的排列
     let left = 0, right = 0;
     let result = false;
     let need = new Map();
     let windowobj = new Map();

    for (const c of s1) {
        need.set(c,1)
    }

     while(right < s2.length){
         let temp = s2[right];
         right++;
         if(need[temp] !== undefined)

     }

};