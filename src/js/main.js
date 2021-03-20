var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 155,
        }
    }
});

var swiper = new Swiper('.swiper-container-2', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 155,
        }
    }
});

var swiper = new Swiper('.swiper-container-3', {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 155,
        }
    }
});


let actionPage = {
    init: function () {
        this.hamburgerClick();
    },
    hamburgerClick: () => {
        const humBtn = document.querySelector('.hamburger')
        const navMobie = document.querySelector('#nav-mobile')
        const overlay = document.querySelector('#overlay')
        humBtn.addEventListener('click', () => {
            humBtn.classList.toggle('active')
            overlay.classList.toggle('active')
            if (navMobie.className.includes('deactive')) {
                navMobie.classList.remove('deactive')
                navMobie.classList.add('active')
            } else {
                if (navMobie.className.includes('active')) {
                    navMobie.classList.remove('active')
                    navMobie.classList.add('deactive')
                } else {
                    navMobie.classList.add('active')
                    navMobie.classList.remove('deactive')
                }
            }


        })
    }

}
actionPage.init()



