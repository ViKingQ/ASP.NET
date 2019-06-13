﻿$(document).ready(function () {
    Highcharts.chart('my_gauge', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: '织机转速'
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            },
            {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            },
            {
            // default background
            },
            {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 2000,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'r/min'
            },
            plotBands: [{
                from: 0,
                to: 2000,
                color: '#55BF3B' // green
            }]
        },

        series: [{
            name: 'Speed',
            data: [0],
            tooltip: {
                valueSuffix: ' r/min'
            }
        }]
    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0];
                $.ajax({
                    type: "GET",
                    url: "Highcharts.aspx?method=QueryRate",
                    cache: false,
                    dataType: "json",
                    success: function (result) {
                        console.log(result[0].mac_rate);
                        point.update(result[0].mac_rate);
                    },
                    error:function(data){
                        console.log("error");
               	    	console.log(data);
                    },
                });
            }, 1000);
        }
    });
});