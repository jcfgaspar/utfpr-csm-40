
// Mostra gráfico na tela
function draw($dados){
    const tagDestino = document.getElementById('curve_chart');
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable($dados);
      var options = {
        title: 'Cotação',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(tagDestino);

      chart.draw(data, options);
    }
  }