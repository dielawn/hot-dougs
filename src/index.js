
import {businessName, description, hours, contactInfo} from './businessInfo.js'
import {displayMenu, menu} from './menu.js'
import {images, addImage} from './images.js'
import createElement from './createElement.js';


//Top of the page
const contentDiv = document.getElementById('content')

//tab logic home, menu, contact
createElement(contentDiv, 'button', 'btn', 'homeBtn', 'Home')
const homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click', () => {
    console.log('home')
})
createElement(contentDiv, 'button', 'btn', 'menuBtn', 'Menu')
const menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', () => {
    console.log('menu')
})
createElement(contentDiv, 'button', 'btn', 'contactBtn', 'Contact')
const contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click', () => {
    console.log('contact')
})



createElement(contentDiv, 'div', 'pictureDiv', 'pictureDiv', '')
const pictureDiv = document.getElementById('pictureDiv')
addImage(pictureDiv, 9, images[9].type, images[9].name)

createElement(contentDiv, 'h1', 'header', 'header', businessName)
createElement(contentDiv, 'div', 'discription', 'discription', description)

//hours
const formatDisplayHours = () => {
    //line break hours at each comma
    let formatedHours = hours.replace(/,/g, "<br>")
    createElement(contentDiv, 'div', 'hours', 'hours', formatedHours)
}
formatDisplayHours()

//contact info
createElement(contentDiv, 'div', 'contactDiv', 'contactDiv', '');
const contactDiv = document.getElementById('contactDiv')
    createElement(contactDiv, 'div', 'contactInfo', 'ownerInfo', contactInfo.owner)
    createElement(contactDiv, 'div', 'contactInfo', 'phoneInfo', contactInfo.phone)
    createElement(contactDiv, 'div', 'contactInfo', 'addressInfo', contactInfo.address.street)
    createElement(contactDiv, 'div', 'contactInfo', 'addressInfo', contactInfo.address.city + ' ' + contactInfo.address.stateAbrv)
    createElement(contactDiv, 'div', 'contactInfo', 'emailInfo', contactInfo.email)

//menu
createElement(contentDiv, 'div', 'menuDiv', 'menuDiv', '')
const menuDiv = document.getElementById('menuDiv')
//loop menu
displayMenu()


