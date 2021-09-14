$('[data-popup-open]').click(function () {
  $(this).siblings('.popup').removeClass('popup--is-hidden')
})
$('[data-popup-close]').click(function () {
  $(this).closest('.popup').addClass('popup--is-hidden')
})