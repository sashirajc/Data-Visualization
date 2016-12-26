function drawChart(data){

    // Modify the original data to ensure that legend shows Survived and
    // Perished instead of 0 and 1
    // Modify original data to replace passenger class in numbers by words
    // Replace 0,1,2 by first class, second class, third class
    data.forEach(function(d){
          if(d['Survived']==="0"){
              d['Status']="Perished";
          }
          else if(d['Survived']==="1"){
              d['Status']="Survived";
          }

          if(d['Pclass']==="1"){
              d['Class']="First Class";
          }
          else if (d['Pclass']==="2"){
              d['Class']="Second Class";
          }
          else if (d['Pclass']==="3"){
              d['Class']="Third Class";
          }

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
    var x = myChart.addCategoryAxis("x",["Class","Status"]);
            x.title = "Passenger Class";
            x.fontSize = "20px";
    var y = myChart.addMeasureAxis("y","Name");
            y.title="Number of Passengers";
            y.fontSize= "20px";
            myChart.addSeries('Status',dimple.plot.bar);
    var l = myChart.addLegend(65, 10, 510, 20, "right");
            l.fontSize = "15px";
            myChart.draw();

};
