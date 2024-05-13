let currentSlide = 1,
  isSliding = true,
  interval

// B) Change Slide Logic
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

// A1)  Play Slide show after 3 seconds
/*
const playPause = () => {
  if (isSliding) {
    interval = setInterval(() => {
      currentSlide++
      changeSlides(currentSlide)
    }, 3000)
    isSliding = false
  } else {
    clearInterval(interval)
    isSliding = true
  }
}

// C) Play-Pause Functionality
const playPauseBtn = document.querySelector('.play-pause')

playPauseBtn.addEventListener('click', () => {
  playPause()
  const playPauseIcon = playPauseBtn.querySelector('i')

  if (isSliding) {
    playPauseIcon.classList.remove('fa-pause')
    playPauseIcon.classList.add('fa-play')
  } else {
    playPauseIcon.classList.remove('fa-play')
    playPauseIcon.classList.add('fa-pause')
  }
})
*/

const playPause = () => {
  interval = setInterval(() => {
    currentSlide++
    changeSlides(currentSlide)
  }, 3000)
}

// C) Play-Pause Functionality
const playPauseBtn = document.querySelector('.play-pause')

playPauseBtn.addEventListener('click', () => {
  const playPauseIcon = playPauseBtn.querySelector('i')
  console.log(isSliding)
  if (isSliding) {
    clearInterval(interval) // Pause the slideshow
    playPauseIcon.classList.remove('fa-pause')
    playPauseIcon.classList.add('fa-play')
  } else {
    playPause() // resume the slideshow
    playPauseIcon.classList.remove('fa-play')
    playPauseIcon.classList.add('fa-pause')
  }
  isSliding = !isSliding // toggle the sliding state
  console.log(isSliding)
})

// A) For infinite slider (starting from here)
playPause()
