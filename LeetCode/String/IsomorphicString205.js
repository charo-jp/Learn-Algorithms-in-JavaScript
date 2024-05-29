// BruteForce
const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const isIsomorphicBF = function(s, t) {
    const LENGTH = s.length;
    const sHashTable = {};
    const tHashTable = {};
    const sSet = new Set();
    const tSet = new Set();


    for (let i = 0; i < LENGTH; i++){
        sSet.add(s[i]);
        tSet.add(t[i]);
    }
    if (sSet.size !== tSet.size) return false;
    
    sSet.forEach(value => {
        sHashTable[value] = [];
    })

    tSet.forEach(value => {
        tHashTable[value] = [];
    })
    
    for (let i = 0; i < LENGTH; i++){
        sHashTable[s[i]] = [...sHashTable[s[i]], i];
        tHashTable[t[i]] = [...tHashTable[t[i]], i];
    }
    
    let sArr = [];
    let tArr = [];

    sSet.forEach(value => {
        sArr.push(sHashTable[value]); 
    }) 

    tSet.forEach(value => {
        tArr.push(tHashTable[value]); 
    }) 

    for (let i = 0; i < sArr.length; i++) {
        if (!equals(sArr[i], tArr[i])){
            return false;
        }
    }
    
    return true;
    

};

const isIsomorphic = (s, t) => {
  const SARRAY = new Array(256).fill(-1);
  const TARRAY = new Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    if (SARRAY[s[i].charCodeAt(0)] != TARRAY[t[i].charCodeAt(0)]) {
      return false;
    }
    SARRAY[s[i].charCodeAt(0)] = i;
    TARRAY[t[i].charCodeAt(0)] = i;
  }
  return true;
}

// tests
// true
// false
// true
// true
const tests = [["title", "paper"], ["foo", "bar"], ["t", "t"],["abaabbc", "efeeffw"]];

// console.log(isIsomorphic("title", "paper"));

for (const test of tests) { // Tests for Brute Force
    console.log(isIsomorphic(test[0], test[1]));
}
