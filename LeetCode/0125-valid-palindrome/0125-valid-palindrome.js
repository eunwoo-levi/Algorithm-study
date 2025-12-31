/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l= 0, r= s.length-1;

    const isAlphaNum = (c) =>
    (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');

    while(l<r){
        let left = s[l].toLowerCase();
        let right = s[r].toLowerCase();

        if(!isAlphaNum(left)){
            l++;
            continue;
        }
        if(!isAlphaNum(right)){
            r--;
            continue;
        }

        if(left!==right)    return false;
        l++;
        r--;
    }

    return true;
};