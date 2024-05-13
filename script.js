let currentSlide = 1

const changeSlide = () => {
  const slides = [...document.querySelectorAll('.slide')]

  slides.forEach(slide => {
    const slideNumber = slide.dataset.slide * 1
    if (slideNumber === currentSlide) {
      slide.classList.add('show-slide')
      slide.classList.remove('hide-slide')
    } else {
      slide.classList.add('hide-slide')
      slide.classList.remove('add-slide')
    }
  })
}

changeSlide()
