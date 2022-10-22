const isPalindrome = function(s) {
    s = removeNonAlphaNumerical(s.toLowerCase());
    const length = s.length;
    let right = 0, left = 0;
    if (length % 2 == 0 && length > 1){
        right = length / 2;
        left = right - 1;
    }else if (length % 2 == 1&& length > 1) {
        right = Math.floor(length / 2);
        left = right;
    }else {
        return true;
    }

    while (right - left < length){
        if (s[right] != s[left]) {
            return false;
        }
        right++;
        left--;
    }
    return true;
};

const removeNonAlphaNumerical = function(s) {
    // s = s.toLowerCase();
    // const regex = /[0-9a-zA-Z]/;
    // let result = "";
    // for (const element of s) {
    //     if (element.match(regex)) {
    //         result += element;
    //     }
    // }
    // return result;
    return s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}


const strings = ["0P","aabaa", "aabbaa", "abc", "a", "", "A man; a plan, a canal: Panama"];
// const strings = [ "abc"];

strings.forEach(string => {
    const result = isPalindrome(string);
    console.log(result);
})

// const result1 = removeNonAlphaNumerical(strings[5]);
// console.log(result1);