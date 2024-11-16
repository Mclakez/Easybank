const nav = document.querySelector('header ul')
const hamburger = document.getElementById('hamburger')
const overlay = document.querySelector('.overlay')
let scrollPosition = 0;
const list = document.querySelectorAll(".list")


function preventScroll() {
  scrollPosition = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
}

function allowScroll() {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
}

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
    
    if (hamburger.src.includes("icon-hamburger.svg")) {
        hamburger.src = "icon-close.svg"
        overlay.style.display="block"
        preventScroll()
    }else {
        hamburger.src = "icon-hamburger.svg"
        overlay.style.display="none"
        allowScroll()
    }
})


function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active')
        this.classList.add('active')
    })
}

list.forEach((item) => item.addEventListener('click',activeLink))