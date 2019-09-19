
$(document).ready(function(){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#intro h1',{
    	duration:200, property:'left', end:-860
    });
    
    scrollorama.animate('#yp h2',{ 
    	delay: 600, duration:400, property:'top', start:-999, end: 87   
    });
    
    scrollorama.animate('#yp-photo',{
    	delay:993, duration:993, property:'top', start:100, end:-300
   	});
   	   scrollorama.animate('#yp-photo-1',{
    	delay:993, duration:993, property:'top', start:100, end:-300
   	});
   	   scrollorama.animate('#yp-photo-2',{
    	delay:993, duration:993, property:'top', start:100, end:-300
   	});
       scrollorama.animate('#yp-photo-3',{
    	delay:993, duration:993, property:'top', start:100, end:-300
   	});
/*
   	 
    scrollorama.animate('#line25-photo',{
    	delay:993, duration:1986, property:'rotate', start:-10, end:10
   	});
   	
*/
   	scrollorama.animate('#passion .btn',{
    	delay:1700, duration:600, property:'left', start:-999, easing:'easeOutBounce'
   	});
   
   	scrollorama.animate('#cs ul li:nth-child(1)',{
    	delay:1986, duration:993, property:'top', start:390, end: 510
   	});
   	scrollorama.animate('#cs ul li:nth-child(2)',{
    	delay:1986, duration:993, property:'top', start:340, end: 500
   	});
   	scrollorama.animate('#cs ul li:nth-child(3)',{
    	delay:1986, duration:993, property:'top', start:460, end: 520
   	});
   	scrollorama.animate('#cs ul li:nth-child(4)',{
    	delay:1986, duration:993, property:'top', start:420, end: 560
   	});

   	
/*
   	scrollorama.animate('#jake h2',{
    	delay:4500, duration:900, property:'top', start:0, easing:'easeOutBounce'
   	});
*/
});