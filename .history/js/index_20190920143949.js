// 首页banner
var banner = new Swiper ('.index-banner', {
    autoplay : 3000,
    loop: true,
    paginationClickable :true,
    prevButton:'.banner-l',
    nextButton:'.banner-r',
    pagination: '.index-page',

});
// 侧导航
var toggleMenu = function(){
    if (swiper.previousIndex == 0)
        swiper.slidePrev()
}
    , menuButton = document.getElementsByClassName('menu-button')[0]
    , swiper = new Swiper('.swiper-box', {
    slidesPerView: 'auto'
    , initialSlide: 1
    , resistanceRatio: .00000000000001
    , onSlideChangeStart: function(slider) {
        if (slider.activeIndex == 0) {
            menuButton.classList.add('cross')
            menuButton.removeEventListener('click', toggleMenu, false)
        } else
            menuButton.classList.remove('cross')
    }
    , onSlideChangeEnd: function(slider) {
        if (slider.activeIndex == 0)
            menuButton.removeEventListener('click', toggleMenu, false)
        else
            menuButton.addEventListener('click', toggleMenu, false)
    }
    , slideToClickedSlide: true
})