// DEFINTIONS:
// return = % of cost that became the
//          amout of profit
// margin = what % of total revenue is profit

// INPUT VARIABLES
let soldPrice = document.getElementById("sold-price");
let shippingPrice = document.getElementById("shipping-price");
let itemCost = document.getElementById("item-cost");
let shippingCost = document.getElementById("shipping-cost");

// OUTPUT VARIABLES
let revenue = document.getElementById("revenue");
let ebayFee = document.getElementById("ebay-fee");
let paypalFee = document.getElementById("paypal-fee");
let costs = document.getElementById("costs");
let totalProfit = document.getElementById("total-profit");
let returnPercentage = document.getElementById("return");
let marginPercentage = document.getElementById("margin");

// CALCULATIONS
function calculateEbayFee(revenue) {
    return (.10 * revenue).toFixed(2);
}

function calculatePayPalFee(revenue) {
    return ((.029 * revenue) + .30).toFixed(2);
}

function calculateTotalProfit(revenue, costs) {
    return (revenue - costs).toFixed(2);
}

function calculateReturnPercentage(profit, costs) {
    return ((parseFloat(profit) / costs) * 100).toFixed(1);
}

function calculateMarginPercentage(profit, revenue) {
    return ((parseFloat(profit) / revenue) * 100).toFixed(1);
}