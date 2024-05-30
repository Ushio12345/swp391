// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
const myChart = new Chart(ctx, {
    type: 'line', // Set the chart type (e.g., 'line', 'bar', 'pie')
    data: {
        labels: [23, 24, 25, 26, 27, 28, 29, 30], // Set the x-axis labels
        datasets: [{
            label: 'Tổng doanh thu', // Set the dataset label
            data: [35000, 35500, 36000, 36500, 37000, 37500, 38000, 38500], // Set the data values
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color
            borderColor: 'rgba(75, 192, 192, 1)', // Set the border color
            borderWidth: 1 // Set the border width
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Start the y-axis at 0
            }
        }
    }
});