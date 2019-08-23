function ATMMachine(input) {
    let totalCashInATM = [];
    let currentBalance = 0;

    for (const arr of input) {
        if (arr.length > 2) {
            totalCashInATM = totalCashInATM.concat(arr);
            let insertedCash = arr.reduce((a, b) => a + b, 0);
            currentBalance += insertedCash;
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${currentBalance}$.`);
        } else if (arr.length === 2) {
            let accountBalance = arr[0];
            let moneyToWithdraw = arr[1];

            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`)
            } else if (ATMReport(totalCashInATM) < moneyToWithdraw) {
                console.log(`ATM machine is out of order!`);
            } else {
                ATMWithdraw(totalCashInATM, moneyToWithdraw);
                currentBalance -= moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${accountBalance - moneyToWithdraw}$. Thank you!`);
            }
        } else {
            let banknote = arr[0];
            let quantity = totalCashInATM.filter(b => b === banknote).length;
            console.log(`Service Report: Banknotes from ${banknote}$: ${quantity}.`);
        }
    }

    function ATMWithdraw(totalCashInATM, moneyToWithdraw) {
        totalCashInATM.sort((a, b) => b - a);
        for (let i = 0; i < totalCashInATM.length; i++) {
            if (moneyToWithdraw === 0) {
                break;
            }

            if (moneyToWithdraw >= totalCashInATM[i]) {
                moneyToWithdraw -= totalCashInATM.splice(i, 1);
                i--;
            }
        }
    }

    function ATMReport(totalCashInATM) {
        let sum = totalCashInATM.reduce((a, b) => a + b, 0);        
        return sum;
    }
}

ATMMachine([[20, 5, 100, 20, 1],
[457, 25],
[1],
[10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
[20, 85],
[5000, 4500],
]
);