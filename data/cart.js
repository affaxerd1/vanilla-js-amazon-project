export let cart = [
{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity : 2,
},
{
  productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity : 1,
}
];
export function addToCart(productId){
  let matchingItem;

   //USE SELECT : 1

    // let productContainer = button.closest('.product-container');
    // let itemValue = productContainer.querySelector('.select')

    // let selectedQuantity = parseInt(itemValue.value)

    //  SELECTED VALUE : 2
    let selectedQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
    
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId)
        matchingItem = cartItem
    })

    if(matchingItem){
      matchingItem.quantity += selectedQuantity;

    }
    else {
      cart.push({
        productId : productId,
        quantity : selectedQuantity
      })
    }
}

export function removeItem(productId){
  let newCart = [];
  
  cart.forEach((cartItem)=> {
    if(cartItem.productId !== productId){
      newCart.push(productId)
      console.log(newCart);
      
    }
    
  })
}


// EXERCISE
 export function removeItemFromCheckout(productId){
//   let newArray = [];
//   cart.forEach((cartItem) => {
//     if (cartItem.id !== productId){
//       newArray.push(cartItem)
//     }
//   })

//   cart = newArray; 

  
}