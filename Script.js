var header = document.getElementById('video_container');
var desc = document.getElementById('description');
var skater_ = document.getElementById('skater');
var scale = 1;
var fullscale = 1.55;
var translate = 30;
var translate_s = 30;


function OutOnScroll(element) {
    if (!element) {
        return;
    }

    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var distanceToTop_desc = window.pageYOffset + desc.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop+200;


    if (scrollTop > distanceToTop ) {
        scale = 1  + (scrollTop - distanceToTop) / elementHeight*0.7;

    }

    if (scrollTop > distanceToTop_desc ) {
        translate = translate - (scrollTop - distanceToTop) / elementHeight*25;
    }

    if (scale > fullscale)
        return;

    if (scale >= 0) {
        element.style.transform = `scale(${scale})`;
        // element.style.transform = `translate3d(0px,${translate2}px,0px)`;
        desc.style.transform = `translate3d(0px,${translate}px,0px)`;
    }

}

function skater(element){

    var scrollTop = document.documentElement.scrollTop+1000;
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    if (translate_s>1100)
        return;
    if(scrollTop>distanceToTop){
        console.log(true);
        translate_s = translate_s + 15;
        element.style.transform = `translate3d(${translate_s}px,0px,0px)`;}
}


function scrollHandler() {
    OutOnScroll(header);
    skater(skater_);
    
}

window.addEventListener('scroll', scrollHandler);