let currentSlide = 1,
  interval,
  isSliderMoving = true

/** ---A)  Getting hold of DOM Elements --- */
const slides = [...document.querySelectorAll('.slide')]
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

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
const icon = playPauseContainer.querySelector('.fas')
/** Toggling icon functionality */
function toggleIcon() {
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
}

playPauseContainer.addEventListener('click', toggleIcon)

function toggleIconOnly() {
  isSliderMoving = false
  icon.classList.add('fa-play')
  icon.classList.remove('fa-pause')
}

leftArrow.addEventListener('click', () => {
  toggleIconOnly()
  clearInterval(interval) // Pause automatic looping

  currentSlide--
  if (currentSlide < 1) {
    currentSlide = slides.length
  }
  changeSlide()
})

rightArrow.addEventListener('click', () => {
  toggleIconOnly()
  clearInterval(interval) // Pause automatic looping

  currentSlide++
  if (currentSlide > slides.length) {
    currentSlide = 1
  }
  changeSlide()
})

playCarousalLoop() // This starts the automatic loop
