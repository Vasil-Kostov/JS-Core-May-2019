function coursesPrices(fundSelected, advSelected, appSelected, educationForm) {
    let fundamentalsPrice = 170;
    let advancedPrice = 180;
    let applicationsPrice = 190;

    let totalPrice = 0;

    if (fundSelected) {
        totalPrice += fundamentalsPrice;
    }
    
    if (advSelected) {
        if (fundSelected) {
            totalPrice += advancedPrice * 0.9;
        } else {
            totalPrice += advancedPrice;
        }
    }

    if (appSelected) {
        totalPrice += applicationsPrice;

        if (fundSelected && advSelected) {
            totalPrice *= 0.94;
        }
    }

    if(educationForm === "online") {
        totalPrice *= 0.94;
    }

    console.log(Math.round(totalPrice));
}

coursesPrices(true, true, true, "online");