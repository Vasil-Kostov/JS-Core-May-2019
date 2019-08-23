// function countWords(input) {
//     let words = input.split(/\W+/).filter(e => e != "");
//     let result = {};

//     for (const word of words) {
//         if (!result[word]){
//             result[word] = 0;
//         }

//         result[word]++;
//     }

//     console.log(JSON.stringify(result));
// }

countWords("JS devs use Node.js for server-side JS.-- JS for devs");

function countWords(input) {
    let regex = /\w+/g;
    let words = input.match(regex);
    let result = {};

    for (const word of words) {
        if (!result[word]){
            result[word] = 0;
        }

        result[word]++;
    }

    console.log(JSON.stringify(result));
}