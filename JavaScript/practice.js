d3.select("#finalFrontier")
.on("click", function()
{ 
d3.select("#BannerBoldly")
     .text("Look at what we can do!")
    console.log("hi")
})

d3.select("#SpaceMoon")
    .on("mouseenter",function()
       { 
    d3.select("#SpaceMoon")
    .attr("src","pics/NASA_FOOD.jpg");
    
})
.on("mouseleave", function()
   {
    d3.select("#SpaceMoon")
        .attr("src","pics/Space_Moon.jpg");
})
d3.select("#SpaceMoon")
.on("click", function()
   { 
    d3.select("#BannerBoldly")
        .text("Look at how yummy this tube of food is!");
    
})


