document.addEventListener("DOMContentLoaded", () => {


    $('#top').click(function() {
        $('html, body').animate({
            scrollTop: $('#top_category').offset().top
        }, 1500)
    })
})
