/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let l = 0;
    let sN = s.length;
    let tN = t.length;

    let i=0;
    if(s==='')  return true;
    while(i < tN){
        if(l===sN-1)  return true;
        if(s[l]===t[i]) l++;
        i++;
    }

    return false;
};