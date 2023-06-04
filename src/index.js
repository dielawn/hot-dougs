
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
    viewHome()
    
})
createElement(contentDiv, 'button', 'btn', 'menuBtn', 'Menu')
const menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', () => {
    console.log('menu')
    viewMenu()
})
createElement(contentDiv, 'button', 'btn', 'contactBtn', 'Contact')
const contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click', () => {
    console.log('contact')
    viewContact()
})



const addClassName = (element, className) => {
    element.classList.add(className)
}
const removeClassName = (element, className) => {
    element.classList.remove(className)
}


createElement(contentDiv, 'div', 'pictureDiv', 'pictureDiv', '')
const pictureDiv = document.getElementById('pictureDiv')
addImage(pictureDiv, 9, images[9].type, images[9].name)

createElement(contentDiv, 'h1', 'header', 'header', businessName)
createElement(contentDiv, 'div', 'descriptionDiv', 'descriptionDiv', description)
const descriptionDiv = document.getElementById('descriptionDiv')

//hours
const formatDisplayHours = () => {
    //line break hours at each comma
    let formatedHours = hours.replace(/,/g, "<br>")
    createElement(contentDiv, 'div', 'hoursDiv', 'hoursDiv', formatedHours)
}
formatDisplayHours()
const hoursDiv = document.getElementById('hoursDiv')
//contact info
createElement(contentDiv, 'div', 'contactDiv', 'contactDiv', '');
const contactDiv = document.getElementById('contactDiv')
    createElement(contactDiv, 'div', 'contactInfo', 'ownerInfo', contactInfo.owner)
    const ownerInfo = document.getElementById('ownerInfo')
    createElement(contactDiv, 'div', 'contactInfo', 'phoneInfo', contactInfo.phone)
    const phoneInfo = document.getElementById('phoneInfo')
    createElement(contactDiv, 'div', 'contactInfo', 'addressInfo', contactInfo.address.street)
    const addressInfo = document.getElementById('addressInfo')
    createElement(contactDiv, 'div', 'contactInfo', 'cityStateInfo', contactInfo.address.city + ' ' + contactInfo.address.stateAbrv)
    const cityStateInfo = document.getElementById('cityStateInfo')
    createElement(contactDiv, 'div', 'contactInfo', 'emailInfo', contactInfo.email)
    const emailInfo = document.getElementById('emailInfo')

//menu
createElement(contentDiv, 'div', 'menuDiv', 'menuDiv', '')
const menuDiv = document.getElementById('menuDiv')
//loop menu
displayMenu()


const viewHome = () => {
    console.log('viewHome')
    //display 
    pictureDiv.style.display = 'block'
    descriptionDiv.style.display = 'block'    
    hoursDiv.style.display = 'block'
    contactDiv.style.display = 'block'
    phoneInfo.style.display = 'block'
    addressInfo.style.display = 'block'
    cityStateInfo.style.display = 'block'
    

    //hide 
    menuDiv.style.display = 'none'
    ownerInfo.style.display = 'none'
    emailInfo.style.display = 'none'
      
}

viewHome()

const viewMenu = () => {
    console.log('viewMenu')
    //display
    menuDiv.style.display = 'flex'

    //hide
    contactDiv.style.display = 'none'
    pictureDiv.style.display = 'none'
    descriptionDiv.style.display = 'none'    
    hoursDiv.style.display = 'none'

}
const viewContact = () => {
    console.log('viewContact')
    //display
    contactDiv.style.display = 'block'
    ownerInfo.style.display = 'block'
    emailInfo.style.display = 'block'

    //hide
    menuDiv.style.display = 'none'
    pictureDiv.style.display = 'none'
    descriptionDiv.style.display = 'none'    
    hoursDiv.style.display = 'none'

}