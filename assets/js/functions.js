$(document).ready(function () {
    $( "#newsletter" ).validate({
        rules: {
            email: {
                required: true,
                email: true
            }            
        },
        messages: {
            email: {
                required: "Campo obrigatorio."
            }           
        }    
    });
});
      
      