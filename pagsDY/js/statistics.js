//Este generar un diagram de barras
function loadUnique() {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
    };

    const config = {
    type: 'line',
    data: data,
    options: {}
    };

    const uniqueChart = new Chart(document.getElementById('uniqueChart'), config);
}

//Este generar un diagram de barras
function loadReach() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    const config = {
        type: 'doughnut',
        data: data,
      };

    const reachChart = new Chart(document.getElementById('reachChart'), config);
}

//Este generar un diagram de barras
function loadGender() {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'Mona'
    ];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
  ],
  borderColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ],
  borderWidth: 1
}]
};

    const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

    const genderChart = new Chart(document.getElementById('genderChart'), config);
}

//Este generar un diagram de barras
function loadAudience() {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'Mona'
    ];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

    const config = {
        type: 'line',
        data: data,
      };

    const audienceChart = new Chart(document.getElementById('audienceChart'), config);
}

function loadstatistics() {
    console.log("Se ejecutan todos")
    loadUnique();
    loadReach();
    loadGender();
    loadAudience();
}