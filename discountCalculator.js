function calculateDiscountedPrice(quantity, pricePerItem) {
   
   const totalPrice = quantity * pricePerItem;

   const discountRate = 0.10;

 if (quantity >= 10) {

   const discountAmount = totalPrice * discountRate;
       
   return totalPrice - discountAmount;
 } else {

   return totalPrice;
 }
}   
    
module.exports = calculateDiscountedPrice;