document.addEventListener("DOMContentLoaded", () => {

    $('.btn_orderYacht').click(function() {
        $('html, body').animate({
            scrollTop: $('#form_telegram').offset().top
        }, 1500)
    })

    


    $('#top').click(function() {
        $('html, body').animate({
            scrollTop: $('#top_category').offset().top
        }, 1500)
    })
})