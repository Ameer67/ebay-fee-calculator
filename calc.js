// DEFINTIONS:
// return = % of cost that became the
//          amout of profit
// margin = what % of total revenue is profit

// CALCULATE AND OUTPUT RESULTS
function printResults() {
    // REVENUE
    let revenueAmount = (parseFloat(soldPrice.value) + parseFloat(shippingPrice.value)).toFixed(2);
    revenue.value = revenueAmount;

    // FEES
    ebayFee.value = (0.10 * revenueAmount).toFixed(2);
    paypalFee.value = (.029 * revenueAmount + 0.30).toFixed(2);

    // COSTS
    let costsAmount = (parseFloat(itemCost.value) + parseFloat(shippingCost.value) + parseFloat(ebayFee.value) + parseFloat(paypalFee.value)).toFixed(2);
    costs.value = costsAmount;

    // PROFIT
    let profitAmount = (revenueAmount - costsAmount).toFixed(2);
    totalProfit.value = profitAmount;

    // RETURN %
    let returnAmount = ((profitAmount / costsAmount) * 100).toFixed(1);
    returnPercentage.value = returnAmount;

    // MARGIN %
    let marginAmount = ((profitAmount / revenueAmount) * 100).toFixed(1);
    marginPercentage.value = marginAmount;
}

// MAIN CONTAINER
let calculatorContainer = document.getElementById("calculator-container");

// HTML INPUT VARIABLES
let soldPrice = document.getElementById("sold-price");
let shippingPrice = document.getElementById("shipping-price");
let itemCost = document.getElementById("item-cost");
let shippingCost = document.getElementById("shipping-cost");

// HTML OUTPUT VARIABLES
let revenue = document.getElementById("revenue");
let ebayFee = document.getElementById("ebay-fee");
let paypalFee = document.getElementById("paypal-fee");
let costs = document.getElementById("costs");
let totalProfit = document.getElementById("total-profit");
let returnPercentage = document.getElementById("return");
let marginPercentage = document.getElementById("margin");

// USER INTERFACE 
calculatorContainer.addEventListener("input", printResults);