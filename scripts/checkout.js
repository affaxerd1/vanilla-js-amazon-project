import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {  loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


//unding async await instead of load page
 async function loadPage(){

    try {
        await loadProductsFetch();


        await new Promise((resolve) => {
            loadCart(()=> {
                resolve();
            })
    
            renderOrderSummary();
            renderPaymentSummary();
        })
    }
    catch(error){
        console.log("There is an error");
        
    }
   
 }
loadPage()
/*
//running  multiple promises at a time
Promise.all([

    //for load products fetch

    loadProductsFetch()
    //when using load products 
    // new Promise((resolve)=>{
    //     loadProductsFetch(()=>{
    //         resolve();
    //     });
    // })
    ,

    new Promise((resolve)=> {
        loadCart(()=>{
            resolve();
        });
    })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});


*/
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




