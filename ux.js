const togglerIcon1 = document.querySelector(".toggler-icon:first-child");
const togglerIcon2 = document.querySelector(".toggler-icon:nth-child(2)");
const togglerIcon3 = document.querySelector(".toggler-icon:last-child");
const navbarToggler = document.querySelector(".Navbar__toggler");
const navbar = document.querySelector(".Navbar");
const headerContainer = document.querySelector("#Header-Container");
const headerMenu = document.querySelector(".Header");
const aboutSection = document.querySelector(".About");
let isVisible = false;
let counted = false;
navbarToggler.addEventListener("click", function () {
  isVisible = !isVisible;
  if (isVisible == true) {
    navbarToggler.classList.add("active");
    navbar.classList.add("Navbar__active");
  } else {
    navbarToggler.classList.remove("active");
    navbar.classList.remove("Navbar__active");
  }
});
let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
window.addEventListener(
  "scroll",
  function () {
    window.pageYOffset > 700? (btnScrollToTop.className = "ScrollBtn show"): (btnScrollToTop.className = "ScrollBtn hide");
    if ((window.scrollY = 800 && counted == false)) {
      const obj = document.querySelectorAll(".count_Number");
      const businessTab = document.querySelector('span[value="95"]');
      animateValue(businessTab, 0, businessTab.getAttribute("value"), 3000);
      obj.forEach((counter) => {
        counter.classList.add("counting");
        animateValue(counter, 0, counter.getAttribute("value"), 3000);
      });
      counted = true;
    }
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      headerContainer.classList.remove("Header__scrollUp");
      headerContainer.classList.add("Header__scroll");
      headerMenu.classList.add("resizeHeader");
    } else {
      headerContainer.classList.add("Header__scrollUp");
    }
    lastScrollTop = st <= 0 ? 0 : st;
    if (st == 0) {
      headerContainer.classList.remove("Header__scroll");
      headerMenu.classList.remove("resizeHeader");
      btnScrollToTop.className = "ScrollBtn hide"
    }

    reveal();
  },
  false
);

function setupTabs() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", function () {
      const serviceNav = button.parentElement;
      const tabContents = document.querySelector(".Tab__contents");
      const tabData = button.getAttribute("data");
      const tabToActive = document.querySelector(
        `.Tab__content[data="${tabData}"]`
      );
      serviceNav.querySelectorAll(".nav-item").forEach((btn) => {
        btn.classList.remove("tab__active");
      });
      tabContents.querySelectorAll(".Tab__content").forEach((tab) => {
        tab.classList.remove("Tab__content--active");
      });
      const percentCounter = tabToActive.querySelector(".percentCounting");
      animateValue(percentCounter,0,percentCounter.getAttribute("value"),1500);
      button.classList.add("tab__active");
      tabToActive.classList.add("Tab__content--active");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  const li = document.querySelectorAll(".menu>ul>li");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((btn) => {
        btn.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
});

const btnScrollToTop = document.querySelector(".ScrollBtn");

btnScrollToTop.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
const reveal = () => {
  const reveal = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveal.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveal[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveal[i].classList.add("show");
    }
  }
};
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const portfolioImage = document.querySelectorAll('.Portfolio__image');
const portfolioImageContainer = document.querySelector('.Portfolio__images--container')
const seeAllBtn = document.querySelector('.seeAll'),
      appsBtn = document.querySelector('.Apps'),
      brandingBtn = document.querySelector('.Branding'),
      creativeBtn = document.querySelector('.Creative'),
      laptopBtn = document.querySelector('.Laptop'),
      productBtn = document.querySelector('.Product');
const maxWidth = window.matchMedia("(max-width: 576px)")
seeAllBtn.onclick = function(){
  portfolioImage.forEach(item=>{
    item.classList.remove('hideImage')
    item.classList.add('showImage')
    portfolioImageContainer.classList.remove('toggle')
  })
  if(maxWidth.matches){
    portfolioImageContainer.classList.remove('toggle')
  }
}
appsBtn.onclick = function(){
  portfolioImage.forEach((item)=>{
    const itemData = item.getAttribute('data')
    if(itemData == 1 || itemData == 3 || itemData == 6){
      item.classList.remove('hideImage')
      item.classList.add('showImage')
      portfolioImageContainer.classList.add('toggle')
    }
    else{
      item.classList.remove('showImage')
      item.classList.add('hideImage')
    }
    if(maxWidth.matches){
      portfolioImageContainer.classList.remove('toggle')
    }
  })
}
brandingBtn.onclick = function(){
  portfolioImage.forEach((item)=>{
    const itemData = item.getAttribute('data')
    if(itemData == 2 || itemData == 3 || itemData == 4){
      item.classList.remove('hideImage')
      item.classList.add('showImage')
      portfolioImageContainer.classList.add('toggle')
    }
    else{
      item.classList.remove('showImage')
      item.classList.add('hideImage')
    } 
    if(maxWidth.matches){
      portfolioImageContainer.classList.remove('toggle')
    }
  })
}
creativeBtn.onclick = function(){
  portfolioImage.forEach((item)=>{
    const itemData = item.getAttribute('data')
    if(itemData == 1 || itemData == 2 || itemData == 4){
      item.classList.remove('hideImage')
      item.classList.add('showImage')
      portfolioImageContainer.classList.add('toggle')
    }
    else{
      item.classList.remove('showImage')
      item.classList.add('hideImage')
    }
    if(maxWidth.matches){
      portfolioImageContainer.classList.remove('toggle')
    }
  })
}
laptopBtn.onclick = function(){
  portfolioImage.forEach((item)=>{
    const itemData = item.getAttribute('data')
    if(itemData == 1 || itemData == 5 || itemData == 6){
      item.classList.remove('hideImage')
      item.classList.add('showImage')
      portfolioImageContainer.classList.add('toggle')
    }
    else{
      item.classList.remove('showImage')
      item.classList.add('hideImage')
    }
    if(maxWidth.matches){
      portfolioImageContainer.classList.remove('toggle')
    }
  })
}
productBtn.onclick = function(){
  portfolioImage.forEach((item)=>{
    const itemData = item.getAttribute('data')
    if(itemData == 3 || itemData == 5 || itemData == 6){
      item.classList.remove('hideImage')
      item.classList.add('showImage')
      portfolioImageContainer.classList.add('toggle')
    }
    else{
      item.classList.remove('showImage')
      item.classList.add('hideImage')
    }
    if(maxWidth.matches){
      portfolioImageContainer.classList.remove('toggle')
    }
  })
}
const navbarItem = document.querySelectorAll('.Navbar__item')
navbarItem.forEach(item=>{
  item.onclick=function(e){
    const activeTab = document.querySelector('.Navbar__item.active')
    activeTab.classList.remove('active')
    item.classList.add('active')
  }
})
// const carouselBtns = document.querySelectorAll('.arrow');
// carouselBtns.forEach(button=>{
//   button.addEventListener('click',()=>{
//     const offset = button.dataset.carouselButton === 'next'? 1:-1;
//     const slides = button.parentElement.querySelector('.Testimonials__list')
//     const activeSlide = slides.querySelector('.list__active');
//     let newIndex = [...slides.children].indexOf(activeSlide)+offset
//     if(newIndex <0) newIndex = slides.children.length -1;
//     if(newIndex>= slides.children.length) newIndex = 0;
//     slides.children[newIndex].classList.add('list__active')
//     activeSlide.classList.remove('list__active')
//   })
// })
const slider = document.querySelector('.Testimonials__list')
const wrapper = slider.parentElement
const slides = Array.from(document.querySelectorAll('.Testimonials__list--item'))
const nextSlide = document.querySelector('.arrow.next')
const prevSlide = document.querySelector('.arrow.prev')

let isDragging =false,
    startPos = 0,
    currentTranslate =0,
    prevTranslate =0,
    animationID =0,
    currentIndex = 0;
slides.forEach((slide,index)=>{
  slide.addEventListener('touchstart',touchStart(index) )
  slide.addEventListener('touchend',touchEnd)
  slide.addEventListener('touchmove',touchMove)

  slide.addEventListener('mousedown',touchStart(index))
  slide.addEventListener('mouseup',touchEnd)
  slide.addEventListener('mouseleave',touchEnd)
  slide.addEventListener('mousemove',touchMove)
  

})
wrapper.oncontextmenu = function(event){
  event.preventDefault();
  event.stopPropagation();
  return false
}
function touchStart(index){
  return function(event){
    event.preventDefault();
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
  }
}
function touchEnd(){
  isDragging = false
  cancelAnimationFrame(animationID)
  const movedBy = currentTranslate - prevTranslate
  if(movedBy < -100 && currentIndex < slides.length -1){
    currentIndex +=1
  }
  if(movedBy > 100 && currentIndex > 0){
    currentIndex -=1
  }
  setPositionByIndex()
}
function touchMove(event){
  if(isDragging){
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate +currentPosition - startPos
  }
}
function getPositionX(event){
  return event.type.includes('mouse')?event.pageX:event.touches[0].clientX
}
function animation(){
  setSliderPosition()
  
  if(isDragging) requestAnimationFrame(animation)
}
function setSliderPosition(){
  return slider.style.transform = `translateX(${currentTranslate}px)`
}
function setPositionByIndex (){
  currentTranslate = currentIndex * -wrapper.offsetWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}
nextSlide.addEventListener('click',goToNextSlide)
prevSlide.addEventListener('click',goToPrevSlide)

function goToNextSlide (){
  if(currentIndex >= slides.length - 1){
    currentIndex = 0
  }else{
  
    currentIndex +=1
  }
  setPositionByIndex()

}
function goToPrevSlide(){
  if(currentIndex <=0){
    currentIndex = slides.length -1
  }else{
  
    currentIndex -=1
  }
  setPositionByIndex()
}
const startSlide = ()=>{
  setInterval(() => {
    currentIndex++;
    setPositionByIndex()
  }, 3000);
}
slider.addEventListener('transitionend',()=>{
  console.log('transition end',currentIndex)
  if(currentIndex >= slides.length - 1){
    currentIndex = -1;
    // slider.style.transition = 'none'
    // slider.style.transform = `translateX(${-slides[currentIndex].clientWidth*currentIndex}px)`
  }
})
startSlide()