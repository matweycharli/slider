let imgBox = document.querySelector('.imgBox');
let slides = imgBox.getElementsByTagName('img');
let i = 0;

function prevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length; 
    slides[i].classList.add('active');
}

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;  
    slides[i].classList.add('active');
}

let contentBox = document.querySelector('.contentBox');
let slidesText = contentBox.getElementsByTagName('div');
let j = 0;

function prevSlideText() {
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slidesText.length; 
    slidesText[j].classList.add('active');
}

function nextSlideText() {
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;  
    slidesText[j].classList.add('active');
}