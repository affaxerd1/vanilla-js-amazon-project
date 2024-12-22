export function removeItemFromCheckout(productId){
  let newArray = [];
  cart.forEach((CartItem) => {
    if (cartIte.id !== productId){
      newArray.push(cartItem)
    }
  })

  cart = newArray;
}