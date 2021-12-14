
function translate(word){
    word = word.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let translatedWord = "";

    if (vowels.indexOf(word[0]) > -1) {
        translatedWord = word + "way";
        return translatedWord;
    } else{
        let firstMatch = word.match(/[aeiou]/g) || 0;
        let vowel = word.indexOf(firstMatch[0]);
        translatedWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
        return translatedWord;
    }
}
module.exports = translate;