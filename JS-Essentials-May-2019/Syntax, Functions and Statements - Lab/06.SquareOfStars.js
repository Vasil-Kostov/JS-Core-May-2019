function SquareOfStars(num){
    for (let i  = 0; i < num; i ++){
        console.log(`*`.repeat(num).split(``).join(` `));
    }
}