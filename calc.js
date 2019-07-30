// MAIN CONTAINER
let calculatorContainer = document.getElementById("calculator-container");

// USER INTERFACE 
calculatorContainer.addEventListener("input", calculateAndPrintResults);

// CALCULATE AND OUTPUT RESULTS
function calculateAndPrintResults() {

    // INPUT VARIABLES
    // Initialize variable to 0.
    // Check if input is NaN (in this case, the isNaN method would return true since the input is ""). If not, assign that input's value to corresponding variable.

    let soldPrice = 0;
    if (!isNaN(parseFloat(document.getElementById("sold-price").value))){
        soldPrice = parseFloat(document.getElementById("sold-price").value);
    }

    let shippingPrice = 0;
    if (!isNaN(parseFloat(document.getElementById("shipping-price").value))) {
        shippingPrice = parseFloat(document.getElementById("shipping-price").value);
    }

    let itemCost = 0;
    document.getElementById("item-cost").value;
    if (!isNaN(parseFloat(document.getElementById("item-cost").value))) {
        itemCost = parseFloat(document.getElementById("item-cost").value);
    }

    let shippingCost = 0;
    document.getElementById("shipping-cost").value;
    if (!isNaN(parseFloat(document.getElementById("shipping-cost").value))) {
        shippingCost = parseFloat(document.getElementById("shipping-cost").value);
    }

    // HTML OUTPUT VARIABLES
    let revenue = document.getElementById("revenue");
    let ebayFee = document.getElementById("ebay-fee");
    let paypalFee = document.getElementById("paypal-fee");
    let costs = document.getElementById("costs");
    let totalProfit = document.getElementById("total-profit");
    let returnPercentage = document.getElementById("return");
    let marginPercentage = document.getElementById("margin");
        
    // REVENUE
    if (soldPrice != 0){
        let revenueAmount = (soldPrice + shippingPrice).toFixed(2);
        revenue.value = revenueAmount;

        // FEES
        ebayFee.value = (0.10 * revenueAmount).toFixed(2);
        paypalFee.value = (.029 * revenueAmount + 0.30).toFixed(2);

        // COSTS
        let costsAmount = (itemCost + shippingCost + parseFloat(ebayFee.value) + parseFloat(paypalFee.value)).toFixed(2);
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
    

}