var body=d3.select("body");
body.append("h1").text("Hola prueba1");
var h1=body.select("h1");
h1.attr({id:"cabecera",class:"clase-1"});
h1.classed("clase-2",true);
h1.classed("clase-1",false);
h1.style({color:"#696","font-size":"50px"});
h1.html("<span>Hola curso</span> decd d");
h1.remove();



var svg=d3.select("svg");
svg.append("rect").attr({x:"100",y:"150",width:"200",height:"50",fill:"#C96"});

var datos=[12,12,32,12,34,100];
body.selectAll("p").data(datos)
.text(function(d,i){return "posición: "+i+" valor: "+d;});

var svg2=d3.select("body").append("svg")
.attr({
	width:500,
	height:500
});


var datos2=[100,200,150,50,80,120];
svg2.selectAll("rect").data(datos2).enter().append("rect")
.attr({
	x:function(d,i){return i*60},
	y:20,
	width:40,
	height:function(d,i){return d},
	"fill-opacity":"0.4"
});

svg2.selectAll("rect").data(datos2).transition().duration(3050).delay(500)
.attr({
	height:function(d,i){return i*20},
});
