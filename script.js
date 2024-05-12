let currentSlide = 1

const changeSlides = () => {
  const slides = document.querySelectorAll('.slide')
  slides.forEach(slide => {
    const slideNumber = slide.dataset.slide
    console.log(slideNumber)
  })
}

changeSlides()
