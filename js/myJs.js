document.addEventListener("DOMContentLoaded", () => {

    const btnList = $('.btn_class');

	btnList.click(function() {
		btnList.not(this).removeClass('active');
		$(this).addClass('active')
		$('.content').hide();
		
		const action = $(this).data('name');
		$(`.${action}`).show();
    });
    
    $('.back_top').click(function() {
        $('html, body').animate({
            scrollTop: $('#category').offset().top
        }, 1500)
    })

    $('.lang_burger').click(function() {
        $('.open_lang').toggleClass('show')
    })

    

    $('.burger_menu').click(function(event){
        $('.open_menu, .burger_menu').toggleClass('active')
    })

    $('.burger_black').click(function(event){
        $('.open_menu, .burger_black').toggleClass('active')
    })

    $('#close_btn').click(function() {
        $('.open_menu').hide()
    })

    $('.slider').slick({
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000
    })
})