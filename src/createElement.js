const createElement = (parent, element, elementClass, elementId, elementContent) => {
    const newElement = document.createElement(element)
    newElement.classList.add(elementClass)
    newElement.id = elementId
    newElement.innerHTML = elementContent
    parent.appendChild(newElement)
}

export default createElement;