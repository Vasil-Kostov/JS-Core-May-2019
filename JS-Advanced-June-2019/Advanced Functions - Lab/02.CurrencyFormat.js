function solve(money) {
    function getDollarFormatter(currencyFormatter) {
        function dollarFormatter(value) {
            return currencyFormatter(",", "$", true, value);
        }

        return dollarFormatter;
    }

    return getDollarFormatter(money);
}