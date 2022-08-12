$('.buyModal-link').on('click', function (e) {
    e.preventDefault;
    $(this).fadeToggle()
    $('.buyModal-promoInput').addClass('active')
})
$('.consolepage-history').slick({
    rows: 3,
})
$('.mainpage-alert__text-copy').on('click', function (e) {
    e.preventDefault;
    $('.mainpage-alert__text-copy-input').select()
    document.execCommand("copy");
})
$('#cps-1 input').change(function () {
    $('#cps-2 input').prop('checked', false)
})
$('#cps-2 input').change(function () {
    $('#cps-1 input').prop('checked', false)
})
$('#pcs-1 input').change(function () {
    $('#pcs-2 input').prop('checked', false)
})
$('#pcs-2 input').change(function () {
    $('#pcs-1 input').prop('checked', false)
})
$('#pps-1 input').change(function () {
    $('#pps-2 input').prop('checked', false)
})
$('#pps-2 input').change(function () {
    $('#pps-1 input').prop('checked', false)
})

