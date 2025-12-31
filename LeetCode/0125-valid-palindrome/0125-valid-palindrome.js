/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';

    for(let i=0; i<s.length;i++){
        const lowerStr = s[i].toLowerCase();
        if((lowerStr >= 'a' && lowerStr <= 'z') || (lowerStr >= "0" && lowerStr <= "9") ){
            str+=lowerStr;
        }
    }


    const reversedStr = str.split('').reverse().join('');

    console.log(reversedStr)


    return str === reversedStr;
};