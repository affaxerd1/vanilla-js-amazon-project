
import { products,getProduct } from "../../data/products.js";
import {cart, removeItem, updateDeliveryOption} from '../../data/cart.js' 
import { formatCurrency } from "../utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../../data/deliveryOptions.js'

export function renderOrderSummary(){

    let order = document.querySelector('.order-summary')
    let accum = '';
    cart.forEach((cartItem, updateDeliveryOption) => {
      products.forEach((product) => {
        if (cartItem.productId === product.id) {
          console.log(cartItem);

          //modifying date
          const deliveryOptionId = cartItem.deliveryOptionId;
          let deliveryOption;
          deliveryOptions.forEach((option) => {
            if(option.id === deliveryOptionId){
            deliveryOption = option;
            }
          })
          const today = dayjs();
          const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
          const dateString = deliveryDate.format('dddd, MMMM D')

      

          let html = `<div class="cart-item-container js-cart-item-container-${product.id}">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image" src="${product.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${product.name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(product.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-button  " data-product-id = '${product.id}'>
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHTML(product, cartItem)}
                  
                  
                </div>
              </div>
            </div>`

        accum += html;
        order.innerHTML = accum
          
        }
      })
    });

    document.querySelectorAll('.js-delete-button').forEach((link) => {
      link.addEventListener('click',
      ()=>{
        const productId = link.dataset.productId;
        console.log(productId);
        removeItem(productId)

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        if (container) container.remove();
        

      }
      )
      })
      

      function deliveryOptionsHTML(product, cartItem){
        let deliveryOptionsaccum = '';
        const today = dayjs();
        
        deliveryOptions.forEach((deliveryOption) => {
          const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
          const dateString = deliveryDate.format('dddd, MMMM D')

          const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`

          const isChecked = deliveryOption.id === cartItem.deliveryOptionId
          deliveryOptionsaccum += `
                  <div class="delivery-option js-delivery-option " data-delivery-option-id= "${deliveryOption.id}" data-product-id= "${product.id}">
                    <input type="radio" ${ isChecked ? 'checked' : ''} class="delivery-option-input" name="delivery-option-${product.id}"  >
                    <div>
                      <div class="delivery-option-date" >
                        ${dateString}
                      </div>
                      <div class="delivery-option-price" >
                        ${priceString} Shipping
                      </div>
                    </div>
                  </div>
          `
        })

      return deliveryOptionsaccum;
      }

      function updateCart() {
        let cartQuantity = 0;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
          cart.forEach((cart) => {
            cartQuantity += cart.quantity;
            console.log(cartQuantity);
          })
          
          const cartQuantityElement = document.querySelector('.cart-quantity');
      if (cartQuantityElement) {
        cartQuantityElement.innerHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${cartQuantity} items</a>)`;
      }
    }

    updateCart()


    document.querySelectorAll('.js-delivery-option').forEach((element) => {

      element.addEventListener('click', ()=> {
        const {productId, deliveryOptionId} = element.dataset;
        //This is a shorthand property for:
        // const productId = element.dataset.productId;
        // const deliveryOptionId = element.dataset.deliveryOptionId
        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
      })
    })

}

