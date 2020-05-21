$(document).ready(function(){
    $('input, label').focus(function(){
        if( $(this).val() == "" ){
            $('body div.row').append('<p class="row">Please fill ' + $(this).attr('id') + ' out</p>');
        }
    });

  
   
       $('column1').change(function(){
        var currentSelection = $(this).val();

        if(currentSelection === 'show' ){
            $('column1').show(1000);
        }
        if(currentSelection === 'hide'){
            $('column2').hide(1000, function(){
                $('body div.column2').append('<p class="btn2">Box hidden</p>');
            });
        }
        if(currentSelection === 'slidedown'){   
            $('column3').slideDown(1000);
        }

        if(currentSelection === 'slideup'){
            $('column3').slideUp(1000);
        }

    })
}); 