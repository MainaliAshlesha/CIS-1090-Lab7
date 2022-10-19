import words from "./words.js";


function linearSearch(needle, haystack){    
       for (let i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) {
            return true;
        }
    }
    return false;
}

export default function(word){
    return linearSearch(word, words);
}