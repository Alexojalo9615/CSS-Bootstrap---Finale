
function carosello(rowId) {

    const slider = document.getElementById(rowId);
    const row = slider.closest('.carousel-slide');
    const prevB = row.querySelector('.carousel-control-prev');
    const nextB = row.querySelector('.carousel-control-next');
    currentTranslate = 0;
    

    nextB.addEventListener('click', () => {
        currentTranslate -= 300;
        currentTranslate = Math.max(currentTranslate, -slider.scrollWidth + row.offsetWidth);
        slider.style.transform = `translateX(${currentTranslate}px)`
    })
    prevB.addEventListener('click', () => {
        currentTranslate += 300;
        currentTranslate = Math.min(currentTranslate, 0);
        slider.style.transform = `translateX(${currentTranslate}px)`
    })
}


document.addEventListener('click',()=> {

    carosello('carEx1');
    carosello('carEx2');
    carosello('carEx3');
})