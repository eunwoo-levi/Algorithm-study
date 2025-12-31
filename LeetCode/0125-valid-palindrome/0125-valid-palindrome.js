/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = [];

    for(let i=0; i<s.length;i++){
        const lowerStr = s[i].toLowerCase();
        if((lowerStr >= 'a' && lowerStr <= 'z') || (lowerStr >= "0" && lowerStr <= "9") ){
            arr.push(lowerStr);
        }
    }

    const str = arr.join("");
    const reversedStr = arr.reverse().join('');
    return str === reversedStr;
};