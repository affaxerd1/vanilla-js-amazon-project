import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//running  multiple promises at a time
Promise.all([

    new Promise((resolve)=>{
        loadProducts(()=>{
            resolve();
        });
    }),

    new Promise((resolve)=> {
        loadCart(()=>{
            resolve();
        });
    })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

//Using promises instead of callbacks
//This however runs one promise at at time
/*
    new Promise((resolve) => {
        loadProducts(()=>{
            resolve()
        });

    }).then(()=>{
        return new Promise((resolve)=>{
            loadCart(()=>{
                resolve();

            });
        });
        
    }).then(()=> {
        renderOrderSummary();
        renderPaymentSummary();
    })
*/


//using callbacks

// loadProducts(() => {
//     loadCart(()=> {
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
   
// });


//no load cart
// loadProducts(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })




