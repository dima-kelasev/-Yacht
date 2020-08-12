
document.addEventListener("DOMContentLoaded", () => {
	const btnList = $('.link_class');

	btnList.click(function() {
		btnList.not(this).removeClass('active');
		$(this).addClass('active')
		$('.content').hide();
		const action = $(this).data('name');
		$(`.${action}`).show();
	})


	$('.link_back').click(function() {
   		$('html').animate({ scrollTop: 0 }, 'slow');
	});


	$('.link_back_ENG').click(function() {
   		$('html').animate({ scrollTop: 0 }, 'slow');
	});



	$('.btn_up').click(function(){
		$('html').animate({scrollTop: 0 }, 'slow');
	});

	const showDc = $('.show_description');
	$('.action_button').click(function(){
		$(showDc).toggle();
		$('.action_button').hide();
	});



				$('.send_button').click(function(){
					const form = $(this).closest('.form-email');
			const name = $(form).find('.user_name');
			const phone = $(form).find('.user_phone');
			const textarea = $(form).find('.textarea');
			
			if (!name.val() || !phone.val() || !textarea.val()) {
				name.addClass('error');
				textarea.addClass('error');
				phone.addClass('error');
				
			}
			else{
				name.removeClass('error');
				textarea.removeClass('error');
				phone.removeClass('error');

				var templateParams = {
					"to_name": name.val(),
   					"numder": phone.val(),
  					 "Message_html": textarea.val()
				};
				console.log(templateParams)

// 	

var service_id = "default_service";
var template_id = "template_AgaRRaZ3";
emailjs.send(service_id, "template_AgaRRaZ3",templateParams )
					.then(function(response) {
						console.log('SUCCESS!', response.status, response.text);
					}, function(error) {
						console.log('FAILED...', error);
					});
				
			}
		})


  });
