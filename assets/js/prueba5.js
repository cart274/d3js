var left_circ=[], right_circ=[], play_circ=1, tt1=0, tt2=50, tt3=100, tt4=150, tt5=200,obj={},paso_max=250;
/******************************************************/
$(document).ready(function() {
	valor_circ();
	var cont_css=[];
	$('[class^="cont_"]').click(function(){
		if($(this).hasClass('inic'))
		{
			play_circ=0;
			$(this).removeClass('inic');
			$(this).addClass('anima');
			$('.tierra').removeClass('anima_tierra');
			cont_css['top']=$(this).css('top');
			cont_css['left']=$(this).css('left');
			$(this).animate({
			top: '1%',
			left: '1%',
			width:'98%',
			height:'100%',
			'border-radius': '1%',
			},1000);	
		}
	});

	$('[class^="cont_"] span').click(function(){
		if($(this).parent().hasClass('anima'))
		{
			obj=$(this).parent();
			$(this).parent().animate({
			top:cont_css['top'],
			left: cont_css['left'],
			width:'100px',
			height:'100px',
			'border-radius': '50%',
			},1000,function(){
				obj.removeClass('anima');
				obj.addClass('inic');
				play_circ=1;
				moveit();});
		}
	});

	$('[class^="cont_"]').hover(
	  function() {
	  	if($(this).hasClass('inic'))
	    	play_circ=0;
	  }, function() {
	  	if($(this).hasClass('inic'))
	  	{
	  		play_circ=1;
	  		moveit();
	  	}
	  }
	);	

function valor_circ()
{
	var t=0, xcenter =300, ycenter=500, r=200,i=0;
	while(t<6.28)
	{
    	right_circ[i]= Math.floor(ycenter+ (r * Math.cos(t)));
    	left_circ[i] = Math.floor(xcenter + (r * Math.sin(t)));
		t+=0.025;
		i++;
	}
	moveit();
}


function moveit() {
	var d=0;
	d=(360/250)*tt1+90;
	tt1++;tt2++;tt3++;tt4++;tt5++;
    if(tt1>paso_max)
    	tt1=0;
	if(tt2>paso_max)
		tt2=0;
	if(tt3>paso_max)
		tt3=0;
	if(tt4>paso_max)
		tt4=0;
    if(tt5>paso_max)
    	tt5=0;
    $('.cont_1').css({'-moz-transform':'rotate('+d+'deg)',
          '-webkit-transform':'rotate('+d+'deg)',
          '-o-transform':'rotate('+d+'deg)',
          '-ms-transform':'rotate('+d+'deg)',
          'transform':'rotate('+d+'deg)'});
    d+=70;
    $('.cont_2').css({'-moz-transform':'rotate('+d+'deg)',
          '-webkit-transform':'rotate('+d+'deg)',
          '-o-transform':'rotate('+d+'deg)',
          '-ms-transform':'rotate('+d+'deg)',
          'transform':'rotate('+d+'deg)'});
    d+=70;
    $('.cont_3').css({'-moz-transform':'rotate('+d+'deg)',
          '-webkit-transform':'rotate('+d+'deg)',
          '-o-transform':'rotate('+d+'deg)',
          '-ms-transform':'rotate('+d+'deg)',
          'transform':'rotate('+d+'deg)'});
    d+=70;
    $('.cont_4').css({'-moz-transform':'rotate('+d+'deg)',
          '-webkit-transform':'rotate('+d+'deg)',
          '-o-transform':'rotate('+d+'deg)',
          '-ms-transform':'rotate('+d+'deg)',
          'transform':'rotate('+d+'deg)'});
    d+=70;
    $('.cont_5').css({'-moz-transform':'rotate('+d+'deg)',
          '-webkit-transform':'rotate('+d+'deg)',
          '-o-transform':'rotate('+d+'deg)',
          '-ms-transform':'rotate('+d+'deg)',
          'transform':'rotate('+d+'deg)'});
    $('.cont_1').animate({
        top: left_circ[tt1],
        left: right_circ[tt1]},30);

    $('.cont_2').animate({
        top: left_circ[tt2],
        left: right_circ[tt2]},30);

    $('.cont_3').animate({
        top: left_circ[tt3],
        left: right_circ[tt3]},30);

    $('.cont_4').animate({
        top: left_circ[tt4],
        left: right_circ[tt4]},30);

    $('.cont_5').animate({
        top: left_circ[tt5],
        left: right_circ[tt5],
    }, 60, function() {
    	if(play_circ==1)
        	moveit();
    });
}


});



