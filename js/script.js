// var color = Chart.helpers.color;
// var idX = "canvas";

Chart.defaults.global.legend.display = false;

var barChartData1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: window.chartColors.red,
            data: [
                20, 30, 40, 50, 60, 70, 80, 90
            ]
        },
        {
            label: 'Dataset 2',
            backgroundColor: window.chartColors.blue,
            data: [
                90, 80, 70, 60, 50, 40, 30, 20
            ]
        }
    ],
    divId: "canvas1",
    title: "Bar Chart 1"
};

// console.log(barChartData1.divId);

window.onload = function() {
    barChart(barChartData1);
    // barChart(barChartData2);
};


function barChart(barChartData) {
    var canvas = document.getElementById(barChartData.divId);
    var ctx = document.getElementById(barChartData.divId).getContext("2d");
    var myNewChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'bottom',
                display: true
            },
            title: {
                display: true,
                text: barChartData.title
            }
        }
    });

    // onClick Event IBM 
    canvas.onclick = function(evt) {
        var activePoints = myNewChart.getElementsAtEvent(evt);
        if (activePoints[0]) {
            var chartData = activePoints[0]['_chart'].config.data;
            var idx = activePoints[0]['_index'];

            var label = chartData.labels[idx];
            var divX = chartData.divId;
            var value = chartData.datasets[0].data[idx];

            var url = "http://example.com/?label=" + label + "&value=" + value + "&divId=" + divX;
            console.log(url);
            alert(url);
        }
    };
}