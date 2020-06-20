const blink = function blink() {
    $('.blinkMe').fadeOut(800).fadeIn(800, blink);
};
$(document).ready(() => {
    blink();
})