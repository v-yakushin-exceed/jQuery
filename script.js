$(document).ready(function(){

   // first task

       $('input:checkbox').click(function(){

        if ($(this).is(':checked')) {

         $(this).parent().parent().addClass('active');
        } else {
         $(this).parent().parent().removeClass('active');
        }
     });

   // first task
    
    $('#add').click(function() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var random = getRandomInt(1, 7);
      
      getRandomInt(10, 20);
      var text = $('#text').val();
        $('.header__link:last').after('<li class="header__link header__link-bg'+ random +'"><div class="header__checkbox"><input id="checkbox" type="checkbox" name="check1" value="1"></div><div class="header__text"><h2> ' + text + ' </h2></div></li>').fadeIn('slow').appendTo('ul.header__items');
      
    // second task

        $('input:checkbox').click(function(){

          if ($(this).is(':checked')) {
  
            $(this).parent().parent().addClass('active');
          } else {
            $(this).parent().parent().removeClass('active');
          }
        });


    });
        
    // second task

    //  var arr=$('input:checkbox:checked').map(function() {return this.value;}).get();

    //  var color = $('.piker__link').click(function() {
    //    var clickId = $(this).attr('id');
    //  });


     // jQuery - Remove all classes with similar names

      (function($) {
        $.fn.removeClassWild = function(mask) {
            return this.removeClass(function(index, cls) {
                var re = mask.replace(/\*/g, '\\S+');
                return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
            });
        };
    })(jQuery);

    //  $('.active').addClass('.active1');

      $('.piker__link').click(function() {
        var color = $('.piker__link').click(function() {
          var clickId = $(this).attr('id');
          $('.active').removeClassWild('active*');
          $('.active').removeClassWild('header__link-bg*');
          $('.active').addClass('active'+ clickId +'');
        });
      });

    




});



    