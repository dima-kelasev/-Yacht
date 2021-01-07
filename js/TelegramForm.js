document.addEventListener("DOMContentLoaded", () => {

    $('#form_telegram').submit(function( event ) {
        event.preventDefault();
    
    
       let name = $(this).find('.name_form').val();
       let phone = $(this).find('.phone_form').val();
       let question = $(this).find('.form_question').val();

       console.log(name)
    
       const chatIdDima = `chat_id=${324368439}`;
       
    
       const url = `https://api.telegram.org/bot1495769408:AAH9gNd68T_BMzxtmNMKO1oW43jSWSsu0_I/sendMessage?${chatIdDima}`;
    
       const text = `Вам пришло новое сообшение: 
        Номер телефона - ${phone};
        Имя - ${name};,
        вопрос - ${question};,
        Свяжитесь и сделайте что нибудь
       `;
    
        $.post(`${url}&text=${text}`,
            function(msg) {  
                $('#form_telegram')[0].reset();
            }
        );
        return false;
    });
    
    });