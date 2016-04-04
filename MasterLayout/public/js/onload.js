/**
 *  ==== sven dodao ====
 */
function fooShowWizard(wName){
	$('body').addClass('wizard-active');
	$('#'+wName).show();
}

function fooHideWizard(wName){
	$('body').removeClass('wizard-active');
	$('#'+wName).hide();
}


	$(document).ready(function(){
		function toggleCodes(on) {
        var obj = document.getElementById('icons');
        
        if (on) {
          obj.className += ' codesOn';
        } else {
          obj.className = obj.className.replace(' codesOn', '');
        }
      }
		
        // tooltip
		$('.sign-in-holder a, a[data-toggle="tooltip"], span[data-toggle="tooltip"], button[data-toggle="tooltip"]').tooltip();

        // .tablet_nav
        $("a.tablet-navigation").bind('click', function(){
            $("body").toggleClass('opened-tablet-nav');
            return false; 
        });
        
        // .navbar-header button.nav
        $(".navbar-header button.nav").bind('click', function(){
            $("body").toggleClass('opened-mobile-nav');
            return false; 
        });
        

        
        // .navbar-nav li a
        $(".navbar-nav li a").bind('click', function(){
            
           var this_a = $(this);
           var parent_li  = $(this).closest('li');
           var scrl_panel = $(this).closest('.left-menu');
           
           // mobile
           if( $("ul", parent_li).size() ){
               
                $(parent_li).toggleClass('expanded');
                $(parent_li).toggleClass('opened-tablet-subnav');
                
                $(scrl_panel).toggleClass('expanded');
               //  return false;
           } 
           
           

           
            // find next
            if( $(this_a).attr('data-open-submenu') ){
                
               // desktop
               $(".left-menu-submenu").show();

               $(".navbar-collapse .subnavigation[data-this-menu!='"+$(this_a).attr('data-open-submenu')+"']").hide();

               $(".navbar-collapse .subnavigation[data-this-menu='"+$(this_a).attr('data-open-submenu')+"']").toggle();
               if( !$(".navbar-collapse .subnavigation[data-this-menu='"+$(this_a).attr('data-open-submenu')+"']").is(':visible') ){
                   $(".left-menu-submenu").hide();
               }

               $('.left-menu-submenu').perfectScrollbar();

               return false;

            }
        });
        
        $('select').select2();

        // perfectScrollbar
        $('.left-menu').perfectScrollbar();
        // $('.scrl_wrapper_submenu').perfectScrollbar();
	});