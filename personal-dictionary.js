//aray of words
let words = [];

//search function
//paramter and returns true if it is found, false
function search(word){
    return words.includes(word);
}
//addWord function
function addWord(word){
    words.push(word)

}
//export
export{search, addWord};