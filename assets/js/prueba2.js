var body=d3.select("body");


var svg=d3.select("body").append("svg")
.attr({
	width:700,
	height:700
});
svg.append("defs");
svg.selectAll('defs').append("pattern").attr({
	id:"imgpattern",
	x:"0",
	y:"0",
	width:"1",
	height:"1"
});

svg.selectAll("pattern").append("image").attr({
	width:"700" ,
	height:"700",
	"xlink:href":"assets/images/picture.jpg"	
})

//var datos1=[0,0,700,0,700,350,0,0],datos2=[700,350,700,700,0,700,700,350],datos3=[0,0,700,350,0,700,0,0],i=2;
var datos1=[0,0,500,0,500,250,0,0,0,0,0,0,0,0,0,0],datos2=[0,0,500,0,500,250,500,500,0,500,500,250,500,0,0,0],datos3=[0,0,500,250,0,500,0,0,0,0,0,0,0,0,0,0],i=2;
svg.append("polygon")
.attr({
	points:datos1,
	fill:"url(#imgpattern)",
	stroke:"#996",
	"stroke-width":"0",
	"onclick":"cambia_poly()"
});
/*
svg.selectAll("polygon").transition().duration(5000).delay(500)
.attr({
	points:datos2,
	
});

svg.selectAll("polygon").transition().duration(5000).delay(5500)
.attr({
	points:datos3,
	
});

svg.selectAll("polygon").transition().duration(5000).delay(11000)
.attr({
	points:datos,
	
});
*/
function cambia_poly()
{
	svg.selectAll("polygon").transition().duration(2000).delay(1)
	.attr({
		points:eval("datos"+i),
	});
	i++;
	if(i==4)
		i=1;
}

//<polygon points="0,0,100,0,300,100,0,200" fill="#dda" stroke="#996" stroke-width="4"/>*/