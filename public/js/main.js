$(document).ready(function () {

    $("#raintable").DataTable({


        ajax: {
            url: "/api/rain",
            dataSrc: "",
        },
        dom: '<"top"<"left-col"B><"center-col"l><"right-col"f>>rtip',
        buttons: [{
            extend: 'pdf',
            className: 'btn btn-info glyphicon glyphicon-file'
        },
        {
            extend: 'excel',
            className: 'btn btn-info glyphicon glyphicon-list-alt'
        },
        ],


        columns: [{
            data: "id",
          
        },
        {
            data: "raindrop",
           
        },
        {
            data: "status",
           
        },
        {
            data: "lid",
            
        },
        {
            data: "created_at",
           
        },
       


        ],
    });

    $("#temptable").DataTable({


        ajax: {
            url: "/api/temperature",
            dataSrc: "",
        },
        dom: '<"top"<"left-col"B><"center-col"l><"right-col"f>>rtip',
        buttons: [{
            extend: 'pdf',
            className: 'btn btn-info glyphicon glyphicon-file'
        },
        {
            extend: 'excel',
            className: 'btn btn-info glyphicon glyphicon-list-alt'
        },
        ],


        columns: [{
            data: "id",
          
        },
        {
            data: "celcius",
           
        },
        {
            data: "status",
           
        },
        {
            data: "created_at",
           
        },
       


        ],
    });

    $("#reservoirtable").DataTable({


        ajax: {
            url: "/api/reservoir",
            dataSrc: "",
        },
        dom: '<"top"<"left-col"B><"center-col"l><"right-col"f>>rtip',
        buttons: [{
            extend: 'pdf',
            className: 'btn btn-info glyphicon glyphicon-file'
        },
        {
            extend: 'excel',
            className: 'btn btn-info glyphicon glyphicon-list-alt'
        },
        ],


        columns: [{
            data: "id",
          
        },
        {
            data: "level",
           
        },
        {
            data: "cm",
           
        },
        {
            data: "status",
           
        },
        {
            data: "created_at",
           
        },
       


        ],
    });

    $.ajax({
        type: "GET",
        url: "/api/temp-chart",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var ctx = $("#tempchart");
            const chartAreaBorder = {
                id: 'chartAreaBorder',
                beforeDraw(chart, args, options) {
                    const {
                        ctx,
                        chartArea: {
                            left,
                            top,
                            width,
                            height
                        }
                    } = chart;
                    ctx.save();
                    ctx.strokeStyle = options.borderColor;
                    ctx.lineWidth = options.borderWidth;
                    ctx.setLineDash(options.borderDash || []);
                    ctx.lineDashOffset = options.borderDashOffset;
                    ctx.strokeRect(left, top, width, height);
                    ctx.restore();
                }
            };
            var myBarChart = new Chart(ctx, {
                type: 'pie',
                data: {
                   
                    labels: data.labels,
                    datasets: [{
                        label: 'Temperature Chart',
                        data: data.data,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgb(255,0,0)',
                            'rgb(255,0,255)',
                            'rgb(255,165,0)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255,99,132,1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        chartAreaBorder: {
                            borderColor: 'blue',
                            borderWidth: 3,
                            borderDash: [0, 0],
                            borderDashOffset: 2,
                        }
                    }
                },
                plugins: [chartAreaBorder]
            });
        },
        error: function (error) {
            console.log(error);
        }
    });

    $.ajax({
        type: "GET",
        url: "/api/rain-chart",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var ctx = $("#rainchart");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Top Product',
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                           
                        ],
                        borderWidth: 1,
                        borderRadius: Number.MAX_VALUE,
                        borderSkipped: false,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                },
            });
    
        },
        error: function (error) {
            console.log(error);
        }
    });

    $.ajax({
        type: "GET",
        url: "/api/reservoir-chart",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var ctx = $("#reservoirchart");
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Top Product',
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                           
                        ],
                        borderWidth: 1,
                        borderRadius: Number.MAX_VALUE,
                        borderSkipped: false,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                },
            });
    
        },
        error: function (error) {
            console.log(error);
        }
    });
});