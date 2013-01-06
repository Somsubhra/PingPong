$(function() { 

	$('#body').load('html/about.html');
	
	$("#about").click(function() {
       $('#body').load('html/about.html');
   	});
	    
   	$("#play").click(function() {
       $('#body').load('html/play.html');
   	});
   
   	$("#howto").click(function(){
	   	$('#body').load('html/howto.html');
	}); 
	
	$("#developers").click(function(){
	   	$('#body').load('html/developers.html');
	});
	
});