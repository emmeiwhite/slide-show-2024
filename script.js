let currentSlide = 1,
  isSliding = true,
  interval

// Change Slide Logic
const changeSlides = () => {
  const slides = document.querySelectorAll('.slide')

  if (currentSlide > slides.length) {
    currentSlide = 1
  }

  slides.forEach(slide => {
    const slideNumber = slide.dataset.slide * 1
    if (slideNumber === currentSlide) {
      slide.classList.add('show-slide')
      slide.classList.remove('hide-slide')
    } else {
      slide.classList.add('hide-slide')
      slide.classList.remove('show-slide')
    }
  })
}

// Play Slide show after 3 seconds
const playPause = () => {
  if (isSliding) {
    interval = setInterval(() => {
      current++
      changeSlides(currentSlide)
    }, 3000)
  } else {
    clearInterval(interval)
  }
}

playPause()
