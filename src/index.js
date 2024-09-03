import './styles.css'
import  waiterImage from './images/waiter.avif'
import deliveryImage from './images/delivery.avif' 
import '@fontsource/poppins'

import food1 from './images/food-1.avif'
import food2 from './images/food-2.avif'
import food3 from './images/food-3.avif'
import food4 from './images/food-4.avif'
import food5 from './images/food-5.avif'
import food6 from './images/food-6.avif'
import food7 from './images/food-7.avif'
import food8 from './images/food-8.avif'
import food9 from './images/food-9.avif'
import food10 from './images/food-10.avif'

const foodURLs = [food1,food2,food3,food4,food5,food6,food7,food8,food9,food10]

const homeBtn = document.querySelector('.home-btn')
const menuBtn = document.querySelector(".menu-btn")
const deliveryBtn = document.querySelector(".deliveries-btn")
const contactBtn = document.querySelector('.contact-btn')
const contentElement = document.querySelector('.content')


function displayHome(){
    contentElement.innerHTML = ''

    const homeContent = document.createElement('div')
    homeContent.innerHTML = `
        <div class="home">
            <p>Made with love. <br> Exceptional in quality</p>
            <img src=${waiterImage} alt="">
        </div>
    `
    contentElement.appendChild(homeContent)
}

document.addEventListener('DOMContentLoaded',displayHome)

homeBtn.addEventListener('click',displayHome)

function displayMenu(){
    contentElement.innerHTML = ''
    const contentGrid = document.createElement('div')
    contentGrid.classList.add('content-grid')
    contentElement.appendChild(contentGrid)

    foodURLs.forEach((foodURL) => {        
        const food1El = document.createElement('div')
        const foodFig = document.createElement('figure')
        const foodImage = document.createElement('img')
        const foodCaption = document.createElement('figcaption')
        foodCaption.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam soluta optio ullam quos autem totam architecto in quam, quaerat, perferendis at voluptas'
        foodFig.appendChild(foodImage)
        foodFig.appendChild(foodCaption)
        foodImage.src = foodURL
        food1El.appendChild(foodFig)

        contentGrid.appendChild(food1El)
    })

};

menuBtn.addEventListener('click', displayMenu)


function displayDelivery(){
    contentElement.innerHTML = ''
    const deliveryContent = document.createElement('div')
    deliveryContent.innerHTML = `
        <div class="delivery">
            <p>Place order your now. <br>We will deliver in time wherever, whenever</p>
            <img src=${deliveryImage} alt="">
        </div>
        `
    contentElement.appendChild(deliveryContent)
}

deliveryBtn.addEventListener('click',displayDelivery        )

function displayContact(){
    contentElement.innerHTML = ''

    const contactContent = document.createElement('div')
    contactContent.innerHTML = `
        <div class="contact">
            <div class="find">
                <h2>Find us</h2>
                <address>
                    <p>Mailitatu Centre</p>
                    <p>Maua Town, Meru</p>
                    <p>106-60600</p>
                </address>
            </div>

            <div class="hours">
                <h2>Hours</h2>
                <h3>Monday-Saturday</h3>
                8am - 9pm
                <h3>Sunday</h3>
                10am - 10pm
            </div>

            <div class="call">
                <h1>Call Us</h1>
                <p>1 (+254)748940143</p>
                <p>2 (+254)786164625</p>
            </div>
        </div>
    `
    contentElement.appendChild(contactContent)

}

contactBtn.addEventListener('click',displayContact)