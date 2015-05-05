$(function(){
   $('.hyphenate').css({"text-align":"justify"})
   $('#thesisAbstract')
     .hide()
     .removeClass('hidden')
     .click(function(){
       $(this).slideToggle('slow');
     })

   $('#thesisAbstract img').hover(
     function() {
       $(this).attr('src', 'images/thesisPlan2.png')
     }, 
     function() {
       $(this).attr('src', 'images/thesisPlan1.png')
     });

   $('.abstractToggler').click(function (){
     var tract = $('#thesisAbstract');
     tract.slideToggle('slow').promise().done(function (){
       if (!tract.is(':visible')) {
         $('html').animate({scrollTop: $('#thesisAbstract').offset().top},'slow');
       }
     })
   })
});
