/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i=0; i<ransomNote.length; i++){
        const idx = magazine.indexOf(ransomNote);
        if(idx!==-1){
            ransomNote.replace(idx,"");
        }
        else{
            return false;
        }
    }

    return true;
};