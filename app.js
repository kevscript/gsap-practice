const burger = document.querySelector('.burger')
const brand = document.querySelector('.brand')
const lines = document.querySelectorAll('.line')
const menu = document.querySelector('.menu')
const menuBtns = document.querySelectorAll('.menu li');

// *********** ON LOAD *********** //

TweenMax.from(burger, 1.2, {
  x:"100px", 
  opacity:0, 
  ease:Power2.easeInOut, 
  delay:0.8
  }
);

TweenMax.from(brand, 1.2, {
  x:"-100px", 
  opacity:0, 
  ease:Power2.easeInOut, 
  delay:0.8
  }
);




// *********** SET TIMELINES *********** //

const burgerTl = new TimelineMax()


// *********** ON ACTIONS *********** //

burger.addEventListener('mouseover', function(e) {
  burgerTl.add( TweenMax.to(burger, 0.1, {scale:1.1})) 
})

burger.addEventListener('mouseleave', function(e) {
  burgerTl.add( TweenMax.to(burger, 0.1, {scale:1})) 
})

burger.addEventListener('click', function(e) {
  if (burger.classList.contains('open')) {
    burger.classList.remove ('open');
    burgerTl.add( TweenMax.to(lines[1], 0.8, {x:"0", opacity:1, ease:Power2.easeIn}))
    burgerTl.add( TweenMax.to(lines[0], 0.8, {y: "0", rotation: 0}), "-=0.8")
    burgerTl.add( TweenMax.to(lines[2], 0.8, {y: "0", rotation: 0}), "-=0.8")
    burgerTl.add( TweenMax.to(menuBtns, 0.5, {opacity:0}))
    burgerTl.add( TweenMax.to(menu, 0.5, {top:'-100%'}))

  } else {
    burger.classList.add('open');
    burgerTl.add( TweenMax.to(lines[1], 0.8, {x:"80", opacity:0, ease:Power2.easeOut}))
    burgerTl.add( TweenMax.to(lines[0], 0.8, {y: "13", rotation: -45}), "-=0.8")
    burgerTl.add( TweenMax.to(lines[2], 0.8, {y: "-13", rotation: 45}), "-=0.8")
    burgerTl.add( TweenMax.to(menu, 0.8, {top:'0%'}))
    burgerTl.add( TweenMax.to(menuBtns, 0.5, {opacity:1}))
  }
})
