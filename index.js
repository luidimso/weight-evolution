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
            '07/2023',
            '08/2023',
            '09/2023',
            '10/2023',
            '11/2023',
            '12/2023',
            '01/2024',
            '02/2024',
            '03/2024',
            '04/2024',
            '05/2024',
            '06/2024',
            '07/2024'
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
            84.9,
            84.0,
            81.3,
            82.6,
            82.2,
            85.7,
            86.4,
            84.8,
            84.0,
            82.7,
            84.6,
            87.2,
            86.9
        ],
    }]
});
