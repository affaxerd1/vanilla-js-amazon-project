 export const orders = JSON.parse(localStorage.getItem('cart')) || [];

 export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
 }

 function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders))
 }