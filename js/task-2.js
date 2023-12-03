function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shiping to ${country} will cost ${totalPrice} credits`;
}