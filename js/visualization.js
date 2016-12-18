
function drawChart(data){

    // Modify the original data to ensure that legend shows Survived and
    // Perished instead of 0 and 1
    data.forEach(function(d){
		  if(d['Survived']==="0"){d['Survived']="Perished";}
		  else if(d['Survived']==="1"){d['Survived']="Survived";}
		  });

    "use strict";
    var margin=75,
    width=1200-margin,
    height=550-margin;


    var svg = d3.select("#chart_id")
                .append("svg")
                .attr("height",height + margin)
                .attr("width",width + margin)
                .append("g")
                .attr('class','chart');

    var myChart = new dimple.chart(svg,data);
    var x = myChart.addCategoryAxis("x",["Pclass","Survived"]);
            x.title = "Passenger Class";
    var y = myChart.addMeasureAxis("y","PassengerId");
            y.title="Number of Passengers";
            myChart.addSeries('Survived',dimple.plot.bar);
            myChart.addLegend(65, 10, 510, 20, "right");
            myChart.draw();

};
