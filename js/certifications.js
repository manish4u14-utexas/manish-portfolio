document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.cert-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-next',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            swiper.slides.forEach(slide => {
                slide.style.display = (category === 'all' || slide.dataset.category === category) 
                    ? 'block' : 'none';
            });
            swiper.update();
        });
    });
});
