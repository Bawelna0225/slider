const leftContainer = document.querySelector('.left-side'),
      contentContainer = document.querySelector('.content'),
      contentImg = document.querySelector('.left-side img'),
      slides = document.querySelectorAll('.slide-preview')

let currentSlideContentValue = document.querySelector('.slide-preview.active .hidden-content').innerHTML,
    currentSlideImg = document.querySelector('.slide-preview.active img').src

const intervalTime = 5000
let slideInterval

window.onload = () => {
  contentContainer.innerHTML = currentSlideContentValue
  contentImg.src = currentSlideImg
}

const setSlideActive = (e) => {
  if(e.target.classList.contains('active')){
    return
  }
  leftContainer.classList.add('blink')
  setTimeout(() => {
    leftContainer.classList.remove('blink')
  },500)

  setTimeout(() => {
    slides.forEach(slide => {
      slide.classList.remove('active')
    })
    e.target.classList.add('active')

    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
    currentSlideContentValue = document.querySelector(`.slide-preview.active .hidden-content`).innerHTML
    currentSlideImg = document.querySelector('.slide-preview.active img').src
    contentContainer.innerHTML = currentSlideContentValue
    contentImg.src = currentSlideImg
  },500)


}

slides.forEach(slide => {
  slide.addEventListener('click', setSlideActive)
})


const nextSlide = () => {
  leftContainer.classList.add('blink')
  setTimeout(() => {
    leftContainer.classList.remove('blink')
  },500)

  setTimeout(() => {
    const currentSlide = document.querySelector('.active')
    currentSlide.classList.remove('active')
    if (currentSlide.nextElementSibling) {
      currentSlide.nextElementSibling.classList.add('active')
    } else {
      slides[0].classList.add('active')
    }
    currentSlideContentValue = document.querySelector(`.slide-preview.active .hidden-content`).innerHTML
    currentSlideImg = document.querySelector('.slide-preview.active img').src
    contentContainer.innerHTML = currentSlideContentValue
    contentImg.src = currentSlideImg

  },500)


}

slideInterval = setInterval(nextSlide, intervalTime)




