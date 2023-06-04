export const menu = [
    {
        name: 'Apple Dog',
        price: '6.99',
        description: 'We know you already like hotdogs. Do you like apple and peanut butter? Us too! Try our Apple Dog!',
        type: 'entre',
        id: 'appleDog',
    },
    {
        name: 'Cream Cheese Dog',
        price: '7.99',
        description: 'This dog is the best! A top quality hoagie with cream cheese, and carmalized onion',
        type: 'entre',
        id: 'creamCheeseDog',
    },
    {
        name: 'General Dog',
        price: '4.99',
        description: 'Hotdog on a bun',
        type: 'entre',
        id: 'generalDog',
    },
    {
        name: 'Naked Dog',
        price: '3.99',
        description: 'Hotdog without a bun',
        type: 'entre',    
        id: 'nakedDog',
    },
    {
        name: 'Chips',
        price: '.99',
        description: 'Pickle Chips',
        type: 'side', 
        id: 'chips'   
    },
    {
        name: 'Soda',
        price: '.99',
        description: 'American sugar water',
        type: 'drink',
        id: 'soda'
    },
    {
        name: 'Beer',
        price: '1.99',
        description: 'Taste the mountains with your dog',
        type: 'drink',
        id: 'beer'
    },
]
import createElement from './createElement.js';
import {images, addImage} from './images.js'
export const displayMenu = () => {
    for (let i = 0; i < menu.length; i++) {
      let header = menu[i].name;
      let itemId = menu[i].id
      let itemDesc = menu[i].description
      let itemPrice = menu[i].price
      if (menu[i].type === 'entre') {
        createElement(menuDiv, 'div', 'entreDiv', 'entreDiv', '' )
        const entreDiv = document.getElementById('entreDiv')
        createElement(entreDiv, 'h1', 'menuHeader', itemId, header);
        createElement(entreDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)  
        createElement(entreDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )    
        addImage(entreDiv, i, images[i].type, images[i].name)  
      } else if (menu[i].type === 'side') {
        const sideDiv = document.getElementById('entreDiv')
        createElement(sideDiv, 'h1', 'menuHeader', itemId, header);
        createElement(sideDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)
        createElement(sideDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  
        addImage(sideDiv, i, images[i].type, images[i].name)
      } else if (menu[i].type === 'drink') {
        const drinkDiv = document.getElementById('entreDiv')
        createElement(drinkDiv, 'h1', 'menuHeader', itemId, header);
        createElement(drinkDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)
        createElement(drinkDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  
        addImage(drinkDiv, i, images[i].type, images[i].name)
      }
    }
  };

