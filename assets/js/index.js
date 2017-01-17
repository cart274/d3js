d3.selectAll("p").style("color", "white");
d3.select("body").style("background-color", "#ccc");

d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42,20,30,16])
    .style("font-size", function(d) { return d + "px"; });

/*
d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
*/

var p = d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42,20,30,16])
    .text(function(d) { return d; });

// Enter…
p.enter().append("p")
    .text(function(d) { return d; });

// Exit…
p.exit().remove();

d3.select("body").transition()
    .style("background-color", "black").duration(7050)
    .delay(500)

d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });