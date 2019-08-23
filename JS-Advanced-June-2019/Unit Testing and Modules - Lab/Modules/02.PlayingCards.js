function playingCards(face, suit) {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const validSuits = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    };

    function throwError() { throw new Error(`Invalid card: ${face + suit}`) };

    if (!validFaces.includes(face)) { throwError(); };

    if (!validSuits.hasOwnProperty(suit)) { throwError(); };

    return `${face + validSuits[suit]}`;
}