var isPalindrome = function(s) {
    const k = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    console.log(k)
    return k === k.split("").reverse().join("")
};
