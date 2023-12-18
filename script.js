function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".list-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

//test project 3
const myslider = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide(){
    counter += 1;
    slidefun(counter);
}

function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n){
    let i = 0;
    for(i=0;i<myslider.length;i++){
        myslider[i].style.display = "none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslider.length){
        counter = 1;
    }
    if(n > myslider.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslider.length;
    }
    myslider[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}


//let items = document.querySelectorAll('.img-slide .list-slide .bakery-image');
//let dots = document.querySelectorAll('.img-slide .dots li');
//let perv = document.getElementById('prev');
//let next = document.getElementById('next');

//let active = 0;
///let lengthItems = items.length - 1;

//next.onclick = function(){
//    if(active + 1 > lengthItems){
//        active = 0;
//    }else{
//        active = active + 1;
//    }
//    reloadSlider();
//}

//perv.onclick = function(){
//    if(active - 1 < 0){
//        active = lengthItems;
//    }else{
//        active = active - 1;
//    }
//    reloadSlider();
//}

//function reloadSlider(){
//    let checkLeft = items[active].offsetLeft;
//    list.style.left = -checkLeft + 'px';

//    let lastActiveDot = document.querySelector('.slider .dots li.active');
//    lastActiveDot.classList.remove('active');
//    dots[active].classList.add('active');
//}