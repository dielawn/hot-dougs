
import {businessName, description, hours, contactInfo} from './businessInfo.js'
import {displayMenu, menu} from './menu.js'
import {images, addImage} from './images.js'
import createElement from './createElement.js';


//Top of the page
const contentDiv = document.getElementById('content')
const generateTabButtons = () => {
    //tab logic home, menu, contact
    createElement(contentDiv, 'div', 'buttonDiv', 'buttonDiv', '')
    const buttonDiv = document.getElementById('buttonDiv')
    createElement(buttonDiv, 'button', 'btn', 'homeBtn', 'Home')
    const homeBtn = document.getElementById('homeBtn')
    homeBtn.addEventListener('click', () => {
    
    console.log('home')
    viewHome()
    
})
createElement(buttonDiv, 'button', 'btn', 'menuBtn', 'Menu')
    const menuBtn = document.getElementById('menuBtn')
    menuBtn.addEventListener('click', () => {
    console.log('menu')
    viewMenu()
})
createElement(buttonDiv, 'button', 'btn', 'contactBtn', 'Contact')
    const contactBtn = document.getElementById('contactBtn')
    contactBtn.addEventListener('click', () => {
    console.log('contact')
    viewContact()
})
}


//hours
const formatDisplayHours = () => {
    //line break hours at each comma
    let formatedHours = hours.replace(/,/g, "<br>")
    createElement(contentDiv, 'div', 'hoursDiv', 'hoursDiv', formatedHours)
}
const handleActiveTab = (tab) => {    
    tab.style.backgroundColor = 'rgba(138, 35, 3, .9)'
    tab.style.color = 'rgb(247, 187, 77)'
}
const viewHome = () => {
    console.log('viewHome')    
    contentDiv.innerHTML = ''
    //display
    generateTabButtons()
    const homeBtn = document.getElementById('homeBtn')
    handleActiveTab(homeBtn)
    createElement(contentDiv, 'div', 'pictureDiv', 'pictureDiv', '')
    const pictureDiv = document.getElementById('pictureDiv')
    addImage(pictureDiv, 9, images[9].type, images[9].name)

    createElement(contentDiv, 'h1', 'header', 'header', businessName)
    createElement(contentDiv, 'div', 'descriptionDiv', 'descriptionDiv', description)

    formatDisplayHours()

    createElement(contentDiv, 'div', 'contactDiv', 'contactDiv', '');
    const contactDiv = document.getElementById('contactDiv')
        createElement(contactDiv, 'div', 'contactInfo', 'phoneInfo', contactInfo.phone)
        createElement(contactDiv, 'div', 'contactInfo', 'addressInfo', contactInfo.address.street)
        createElement(contactDiv, 'div', 'contactInfo', 'cityStateInfo', contactInfo.address.city + ' ' + contactInfo.address.stateAbrv)

}

viewHome()

const viewMenu = () => {
    console.log('viewMenu')
    contentDiv.innerHTML = ''
    //display
    generateTabButtons()
    const menuBtn = document.getElementById('menuBtn')
    handleActiveTab(menuBtn)
    createElement(contentDiv, 'div', 'menuDiv', 'menuDiv', '')
    displayMenu()

}
const viewContact = () => {
    console.log('viewContact')
    contentDiv.innerHTML = ''
    //display
    generateTabButtons()
    const contactBtn = document.getElementById('contactBtn')
    handleActiveTab(contactBtn)
    createElement(contentDiv, 'div', 'contactDiv', 'contactDiv', '');
    const contactDiv = document.getElementById('contactDiv')
    createElement(contactDiv, 'div', 'contactInfo', 'ownerInfo', contactInfo.owner)    
    createElement(contactDiv, 'div', 'contactInfo', 'phoneInfo', contactInfo.phone)    
    createElement(contactDiv, 'div', 'contactInfo', 'addressInfo', contactInfo.address.street)    
    createElement(contactDiv, 'div', 'contactInfo', 'cityStateInfo', contactInfo.address.city + ' ' + contactInfo.address.stateAbrv)    
    createElement(contactDiv, 'div', 'contactInfo', 'emailInfo', contactInfo.email)
    
    addImage(contactDiv, 8, images[8].type, images[8].name)

}

