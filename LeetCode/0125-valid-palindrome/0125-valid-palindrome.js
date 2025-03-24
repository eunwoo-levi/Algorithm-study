var isPalindrome = function(s) {
    const k = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    return k === k.split("").reverse().join("")
};
