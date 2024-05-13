let currentSlide = 1,
  interval,
  isSliderMoving = true

const slides = [...document.querySelectorAll('.slide')]

const changeSlide = () => {
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

/** --- Step-2: To autoplay the Carousal --- */
const playCarousalLoop = () => {
  interval = setInterval(() => {
    currentSlide++
    if (currentSlide > slides.length) {
      currentSlide = 1
    } else if (currentSlide < 0) {
      currentSlide = slides.length
    }

    changeSlide()
    console.log(currentSlide)
  }, 2000)
}

/** --- 2. PLAY/PAUSE FUNCTIONALITY --- */
const playPauseContainer = document.querySelector('.play-pause')

playPauseContainer.addEventListener('click', () => {
  const icon = playPauseContainer.querySelector('.fas')

  if (isSliderMoving) {
    icon.classList.remove('fa-pause')
    icon.classList.add('fa-play')
    isSliderMoving = false

    // To Stop the carousal from moving, we need to use clearInterval
    clearInterval(interval)
  } else {
    icon.classList.add('fa-pause')
    icon.classList.remove('fa-play')
    isSliderMoving = true

    playCarousalLoop()
  }
})

playCarousalLoop() // This starts the automatic loop
