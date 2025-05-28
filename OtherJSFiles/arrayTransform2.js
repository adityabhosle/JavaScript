let productPrices = [34,90,89,91,45]

let discountedPrices = productPrices.map(price => price - (price*0.10))
console.log(discountedPrices)

let affordableProducts = productPrices.filter(price => price < 50)
console.log(affordableProducts)

let totalAfford = affordableProducts.reduce((total, price) => {return total + price}, 0)
console.log(totalAfford)