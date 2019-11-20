$(document).ready(function(){

   // first task

       $('input:checkbox').click(function(){

        if ($(this).is(':checked')) {

         $(this).parent().parent().addClass('active');
        } else {
         $(this).parent().parent().removeClass('active');
        }
     });
    
    $('#add').click(function() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const random = getRandomInt(1, 7);
      
      getRandomInt(10, 20);
      const text = $('#text').val();
        $('ul.header__items').append('<li class="header__link header__link-bg'+ random +'"><div class="header__checkbox"><input id="checkbox" type="checkbox" name="check1" value="1"></div><div class="header__text"><h2> ' + text + ' </h2></div></li>').appendTo('ul.header__items');
      
    // second task

        $('input:checkbox').click(function(){

          if ($(this).is(':checked')) {
  
            $(this).parent().parent().addClass('active');
          } else {
            $(this).parent().parent().removeClass('active');
          }
        });

        $('#text').val('');

    });
        
    // second task

     // jQuery - Remove all classes with similar names

      (function($) {
        $.fn.removeClassWild = function(mask) {
            return this.removeClass(function(index, cls) {
                const re = mask.replace(/\*/g, '\\S+');
                return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
            });
        };
    })(jQuery);

      $('.piker__link').click(function() {
        const click = $(this).attr('id');
        $('.active').removeClassWild('active*');
        $('.active').removeClassWild('header__link-bg*');
        $('.active').addClass('active'+ click +'');
      });
});



    