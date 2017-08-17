$(document).ready(function () {
    'use strict';
    
    var $img = $('img'),
        $numb = /^\d+$/;
    
    
    //Click on image arrow
    $img.on('click', function () {
        var $this = $(this);
        
        if ($this.prev().val() === '') {
           
            alert('Please fill the field');

        } else {
                        
            $this.prev().addClass('animated bounceOutLeft');
            $this.hide();
            $this.next().css('display', 'block');
            $this.next().addClass('animated bounceInRight');
            $this.next().next().show();
        }
    
    });
    
    //Mouse enter in submit button
    $('input[type=submit]').on({
        mouseenter: function () {
            $(this).css('background-color', 'green');
        },
        mouseleave: function () {
            $(this).css('background-color', '#ACA5A5');
        }
    });
    

   
});