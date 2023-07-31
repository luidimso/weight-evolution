$('#weightChart').append('<div id="chart"></div>');

Highcharts.chart('chart', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Weight Evolution'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '09/2022', 
            '10/2022', 
            '11/2022', 
            '12/2022', 
            '01/2023', 
            '02/2023',
            '03/2023',
            '04/2023',
            '05/2023',
            '06/2023',
            '07/2023'
        ]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Weight (kg)',
        data: [
            98.6, 
            92.1, 
            91.9, 
            84.2, 
            90.4, 
            89.5, 
            89.3, 
            85.1, 
            78.8, 
            86.1, 
            84.9
        ],
    }]
});