function wordsUppercase(text) {
    let strUpper = text.toUpperCase();
    let words = extractWords();

    words = words.filter(w => w != '');
    
    function extractWords() {
        return strUpper.split(/\W+/);
    }
    
    console.log(words.join(', '));
}