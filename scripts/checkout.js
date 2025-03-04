import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cart-oop.js'
import '../data/cart-classes.js'
import "../data/backend-practise.js"
import { renderProductsGrid } from "./amazon.js";
import { loadProducts } from "../data/products.js";

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

