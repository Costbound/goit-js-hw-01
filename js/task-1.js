function makeTransaction(quantity, pricePerDroiid) {
    const totalPrice = pricePerDroiid * quantity;
    return `You ordered ${quantity} droids worth ${totalPrice}!`;
}