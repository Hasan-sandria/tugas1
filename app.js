view = document.querySelectorAll('.view-me');
btnCLose = document.querySelector('.btn-close');
popup = document.querySelector('#popup-container');
popupMain = document.querySelector('.popup-main');
prevBtn = document.querySelector('.prev-btn');
nextBtn = document.querySelector('.next-btn');
imgPopup = document.querySelector('.img-popup')


let currentImgIndex = 0;

view.forEach( function (btn, index) {
    btn.addEventListener('click', function () {
        popup.classList.remove('hidden');
        popup.classList.add('animate__fadeInDown');
        setTimeout ( () => {
            popup.classList.remove('animate__fadeInDown');
        }, 1000);
        currentImgIndex = index + 1;
        currentImageDisplay(currentImgIndex);
    })
});

function currentImageDisplay () {
    imgPopup.style.background = `url(img/${currentImgIndex}.jpg) center/cover no-repeat`;
}

btnCLose.addEventListener('click', function () {
    popupMain.classList.add('animate__fadeOutDown');
    setTimeout ( () => {
        popupMain.classList.remove('animate__fadeOutDown');
        popup.classList.add('hidden',);
    }, 500);
});

prevBtn.addEventListener('click', function(){
    currentImgIndex--;
    if(currentImgIndex === 0){
        currentImgIndex = view.length;
    }
    currentImageDisplay(currentImgIndex);
});

nextBtn.addEventListener('click', function(){
    currentImgIndex++;
    if(currentImgIndex === 11){
        currentImgIndex = 1;
    }
    currentImageDisplay(currentImgIndex);
});
