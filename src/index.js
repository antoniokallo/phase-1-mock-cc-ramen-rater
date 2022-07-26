// write your code here


const ramenMenu = document.querySelector('div#ramen-menu')
const newRamenForm = document.querySelector('#new-ramen')


fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenArr => {
        // const ramenMenu = document.querySelector('div#ramen-menu')

        ramenArr.forEach(ramenObject => {
            renderRamenImg(ramenObject)
        })
    })

// difficult
newRamenForm.addEventListener('submit', event => {
    event.preventDefault()

    const nameInput = event.target.name.value
    const restaurantInput = event.target.restaurant.value
    const imageInput = event.target.image.value
    const ratingInput = event.target.rating.value
    const commentInput = event.target['new-comment'].value

    const newRamen = {
        name: nameInput,
        restaurant: restaurantInput,
        image: imageInput,
        rating: ratingInput,
        comment: commentInput
    }

    renderRamenImg(newRamen)
    event.target.reset()
})


function renderRamenImg(ramenObject) {

    const imgTag = document.createElement('img')
    imgTag.src = ramenObject.image
    ramenMenu.append(imgTag)

// difficult
    imgTag.addEventListener('click', event => {
        const ramenDetail = document.querySelector('div#ramen-detail')

        const Img = ramenDetail.querySelector('img.detail-image')
        Img.src = ramenObject.image

        const H2 = ramenDetail.querySelector('.name')
        H2.textContent = ramenObject.name

        const h3 = ramenDetail.querySelector('h3.restaurant')
        h3.textContent = ramenObject.restaurant

        const rating = document.querySelector('#rating-display')
        rating.textContent = ramenObject.rating

        const p = document.querySelector('#comment-display')
        p.textContent = ramenObject.comment
    })
}


