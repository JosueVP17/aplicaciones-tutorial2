const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi qui reprehenderit placeat doloribus dolor.'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis velit quas at suscipit qui deleniti.'
    },
    {
        index: '03',
        name: 'chilling mode',
        image: 'img3.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis velit quas at suscipit qui deleniti idj akdosakod.'
    }
]

const nextBtn = document.querySelector('.next-btn')
let productIndex = document.querySelector('.product-index')

let smProductImgContainer = document.querySelector('.sm-product-img-container')
let smProductImg = document.querySelector('.sm-product-img')
let smProductDesc = document.querySelector('.sm-product-desc')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDesc = document.querySelector('.product-desc')

let currentProduct = 0

nextBtn.addEventListener('click', () => {
    if(currentProduct >= productData.length - 1){
        currentProduct = 0
    } else {
        currentProduct++
    }

    productIndex.innerHTML = productData[currentProduct].index
    smProductDesc.innerHTML = productData[currentProduct].desc

    smProductImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(() => {
        productName.innerHTML = productData[currentProduct].name
        productDesc.innerHTML = productData[currentProduct].desc
        smProductImg.src = productImg.src = backdropImg.src = `img/${productData[currentProduct].image}`
    }, 500)

    setTimeout(() => {
        smProductImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    }, 2000)
})


