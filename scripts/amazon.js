import {cart, addToCart} from '../data/cart.js'
import  {products,loadProducts} from '../data/products.js'
import { formatCurrency } from './utils/money.js';


loadProducts(renderProductsGrid)

export function renderProductsGrid(){

let accum = "";


  for(let i = 0; i<products.length; i++){
    let product = products[i]
    let html = `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src=${product.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.stars()}">$$
              <div class="product-rating-count link-primary">
                ${product.rating.count}  
              </div>
            </div>

            <div class="product-price">
              ${product.formatMoney()}
            </div>

            <div class="product-quantity-container">
              <select class='select js-quantity-selector-${product.id}'>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              ${product.getExtraInfo()}
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart added-to-cart-${product.id}">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id='${product.id}'>
              Add to Cart
            </button>
          </div>        
        `

    accum += html
    
    
  }



  function updateCartQuantity(productId) {
    let cartQuantity = 0;

      cart.forEach((cart) => {
        cartQuantity += cart.quantity;
        console.log(cartQuantity);

        let timeoutRefs = {};

        if(timeoutRefs[productId]){
          clearTimeout[productId]
        }
        let showMessage =document.querySelector(`.added-to-cart-${productId}`);
        showMessage.style.opacity = 1
        timeoutRefs[productId] = setTimeout(()=> {
          showMessage.style.opacity = 0;
        }, 2000)

      })

      console.log(cart);
      document.querySelector('.cart-quantity').innerHTML=cartQuantity;  
  }

  document.querySelector('.js-products-grid').innerHTML = accum
  document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click', ()=> {
      console.log(button.dataset.productId);
      const productId = button.dataset.productId
      


      addToCart(productId)

      updateCartQuantity(productId)

        let testselect=document.querySelector('.select')
        console.log(testselect.options[testselect.selectedIndex].value);  
      
    })
  })
}