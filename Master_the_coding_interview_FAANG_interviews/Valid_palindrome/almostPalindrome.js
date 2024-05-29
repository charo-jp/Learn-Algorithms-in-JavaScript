// Q. Given a string, determine if it is almost a palindrome. A string is almost a
//    palindrome if it becomes a palindrome by removing 1 letter.
//    Consider only alphanumeric characters and ignore case sensitivity.

// It is probably better to start from each edges because xxxxx
const isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    if (s.length <= 2) return true;
    let p1 = 0;
    let p2 = s.length - 1;
    while (p2 >= p1) {
        if (s[p1] === s[p2]) {
            p1++;
            p2--;
        }else {
            // delete a character on the right
            const pattern1 = s.substring(0, p1 ) + s.substring(p1 + 1, s.length);
            // delete a character on the left
            const pattern2 = s.substring(0, p2 ) + s.substring(p2 + 1, s.length);
            if (pattern1[p1] === pattern1[p2 - 1]) {
                s = pattern1;
                p1++;
                p2--;
                
            }else if (pattern2[p1] === pattern2[p2 - 1]) {
                s = pattern2;
                p1++;
                p2--;
            }else {
                return false;
            }
        }
    } 
    return true;
};


const strings = ["0P","aabaa", "aabbaa", "abc", "a", "", "A man; a plan, a canal: Panama"];

const almosts = ["raceacar", "abccdba", "abcdefdba", "", "a", "ab"];
// Expected Results
// True
// True
// False
// True
// True

almosts.forEach(string => {
    const result = isPalindrome(string);
    console.log(result);
})

// const result1 = removeNonAlphaNumerical(strings[5]);
// console.log(result1);