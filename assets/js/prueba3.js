var body=d3.select("body");


function muestra_video()
{
	video2=d3.select(".cont_video2");
	video2.transition().duration(1000).delay(0).style({
		width:"150px",
		height:"150px"
	});
	video2.select("video").transition().duration(1000).delay(0).attr({
		width:"500px",
		height:"600px"
	});
	body.select("circle").transition().duration(1000).delay(0).attr({
		r:100
	});
	//body.selectAll('video').play();
	//body.selectAll('video').attr({autoplay:"autoplay"});
	var v = document.getElementsByTagName("video")[0];
	v.play();
}