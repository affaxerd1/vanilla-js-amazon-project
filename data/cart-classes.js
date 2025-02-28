
class Cart{
  cartItems;
  #localStorageKey;

  constructor(localStorageKey){
    this.#localStorageKey = this.localStorageKey;
    this.loadFromStorage;
  }

  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.cartItems){
        this.cartItems = [
            {
              productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
              quantity : 2,
              deliveryOptionId : '1F'
            },
            {
              productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
              quantity : 1,
              deliveryOptionId : '2'
            }
            ];
    }
};

saveToStorage(){
  localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems))
};


addToCart(productId){
  let matchingItem;

   //USE SELECT : 1

    // let productContainer = button.closest('.product-container');
    // let itemValue = productContainer.querySelector('.select')

    // let selectedQuantity = parseInt(itemValue.value)

    //  SELECTED VALUE : 2
    let selectedQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
    
    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId)
        matchingItem = cartItem
    })

    if(matchingItem){
      matchingItem.quantity += selectedQuantity;

    }
    else {
      this.cartItems.push({
        productId : productId,
        quantity : selectedQuantity,
        deliveryOptionId : '1'
      })
    }

    this.saveToStorage()
};

removeItem(productId){
  let newCart = [];
  
  this.cartItems.forEach((cartItem)=> {
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
      console.log(newCart);
      
    }
    
  })
  this.cartItems = newCart
  this.saveToStorage()
};


updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  this.cartItems.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingItem = cartItem
    }
  })

  matchingItem.deliveryOptionId = deliveryOptionId
  this.saveToStorage();
}

}


let cart = new Cart('cart-classes')
let businessCart = new Cart('cart-business')



    


//  export function removeItemFromCheckout(productId){
// //   let newArray = [];
// //   cart.forEach((cartItem) => {
// //     if (cartItem.id !== productId){
// //       newArray.push(cartItem)
// //     }
// //   })

// //   cart = newArray; 

// // saveToStorage()

  
// }

