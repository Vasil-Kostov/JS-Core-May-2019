function caffeineStudy(days) {
    let caffeineConsumed = 0;

    for(let i = 1; i <= days; i++){
        caffeineConsumed += ((3 * 150) / 100) * 40;
        caffeineConsumed += ((2 * 250) / 100) * 8;
        caffeineConsumed += ((3 * 350) / 100) * 20;
        
        if (i % 5 === 0) {
            caffeineConsumed += ((3 * 500) / 100) * 30;
        }

        if (i % 9 === 0) {
            caffeineConsumed += ((4 * 250) / 100) * 8;
            caffeineConsumed += ((2 * 500) / 100) * 30;
        }
    }

    console.log(`${caffeineConsumed} milligrams of caffeine were consumed`);
}

caffeineStudy(5);