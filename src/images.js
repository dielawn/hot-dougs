export const images = [
      
    {
        name:'hotdogsVeggies',
        src: 'images/hotdogs-veggies.jpg',
        link: 'https://www.pexels.com/photo/hot-dogs-and-vegetables-4113507/',
        alt:'Hotdogs on plates with cherry tomatoes and cellery',
        credit: 'alleksana',
        type: 'portrait',
    },
    {
        name:'holdingHotdogs',
        src: 'images/holding-hotdogs.jpg',
        link: 'https://www.pexels.com/photo/person-holding-hotdog-sandwiches-12123654/',
        alt:'Each hand holding a decorated hotdog',
        credit: 'Kamila Bairam',
        type: 'portrait',
    },
    {
        name:'kidsHotdogs',
        src: 'images/kids-hotdogs.jpg',
        link: 'https://www.pexels.com/photo/a-young-girl-and-boy-smiling-while-holding-hot-dog-sandwiches-8522766/',
        alt:'A young girl and boy smiling while holding hotdogs',
        credit: 'RDNE Stock project',
        type: 'landscape',
    },
     {
        name:'hotdogPyramid',
        src: 'images/hotdog-pyramid.jpg',
        link: 'https://www.pexels.com/photo/beef-close-up-delicious-diet-357576/',
        alt:'Hotdogs stacked on a platter',
        credit: 'Pixabay',
        type: 'landscape',
    },
    {
        name:'condiments',
        src: 'images/condiments.jpg',
        link: 'https://www.pexels.com/photo/sauces-for-hot-dogs-12157049/',
        alt:'Condiments on a tray',
        credit: 'Mayra Abeki',
        type: 'portrait',
    },
    {
        name:'hotdogsCoke',
        src: 'images/hotdogs-coke.jpg',
        link: 'https://www.pexels.com/photo/hot-dogs-with-soda-4113464/',
        alt:'Hotdogs on a plate with a soda near by',
        credit: 'alleksana',
        type: 'portrait',
    },
    {
        name:'grillinDogs',
        src: 'images/grillin-dogs.jpg',
        link: 'https://www.pexels.com/photo/two-sausages-on-charcoal-grill-1275692/',
        alt:'Two hotdogs on a charcoal grill',
        credit: 'Mateusz Dach',
        type: 'landscape',
    },
    {
        name:'hotdogsStacked',
        src: 'images/hotdogs-stacked.jpg',
        link: 'https://www.pexels.com/photo/hotdog-sandwich-on-white-background-4518645/',
        alt:'Three hotdogs stacked with toppings',
        credit: 'Polina Tankilevitch',
        type: 'portrait',
    },
    {
        name:'hotdogsDisheveled',
        src: 'images/hotdogs-disheveled.jpg',
        link: 'https://www.pexels.com/photo/close-up-photo-of-hotdog-sandwiches-4518653/',
        alt:'Three hotdogs with toppings and white background',
        credit: 'Polina Tankilevitch',
        type: 'portrait',
    },
    {
        name:'dougGrillin',
        src: 'images/doug-grillin.jpg',
        link:'https://www.pexels.com/photo/gray-haired-man-grilling-hot-dogs-8522762/#',
        alt:'Gray haired man grilling hotdogs',
        credit: 'RDNE Stock project',
        type: 'landscape',
    },
]

export const addImage = (parent, imageIndex, imageClass, imageId ) => {
    const newImage = document.createElement('img')
    newImage.classList.add(imageClass)
    newImage.id = imageId
    newImage.src = images[imageIndex].src
    newImage.alt = images[imageIndex].alt
    newImage.innerText = images.credit
    parent.appendChild(newImage)
}

