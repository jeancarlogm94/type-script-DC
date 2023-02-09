"use strict";
var Utiliy;
(function (Utiliy) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return price * 0.21 * price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenaltyIva(price) {
            return price * 0.3 * price;
        }
        Taxes.calculatePenaltyIva = calculatePenaltyIva;
    })(Taxes = Utiliy.Taxes || (Utiliy.Taxes = {}));
})(Utiliy || (Utiliy = {}));
