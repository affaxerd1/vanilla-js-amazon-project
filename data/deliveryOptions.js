
export const deliveryOptions = [
    {
        id : '1',
        deliveryDays : 7,
        priceCents : 0
    },
    {
        id : '2',
        deliveryDays : 3,
        priceCents : 499
    },
    {
        id : '3',
        deliveryDays : 0,
        priceCents : 999
    }
]


export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
          deliveryOptions.forEach((option) => {
            if(option.id === deliveryOptionId){
            deliveryOption = option;
            }

          })

          return deliveryOption ||deliveryOptions[0]
}

// filepath: /home/ralph/Desktop/js/vanilla-js-amazon-project/data/deliveryOptions.js
// export function getDeliveryOption(deliveryOptionId) {
//     console.log('deliveryOptionId:', deliveryOptionId); // Add this line
//     console.log('deliveryOptions:', deliveryOptions); // Add this line

//     let deliveryOption;
//     deliveryOptions.forEach((option) => {
//         if (option.id === deliveryOptionId) {
//             deliveryOption = option;
//         }
//     });

//     return deliveryOption || deliveryOptions[0];
// }