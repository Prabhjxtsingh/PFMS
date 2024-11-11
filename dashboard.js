const outcomeChartCtx = document.getElementById('outcomeChart').getContext('2d');
const incomeChartCtx = document.getElementById('incomeChart').getContext('2d');
const balanceChartCtx = document.getElementById('balanceChart').getContext('2d');

new Chart(outcomeChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Investment', 'Transport', 'Food', 'Other'],
        datasets: [{
            data: [2313, 1281, 629, 501],
            backgroundColor: ['#f3ba2f', '#2a71d0', '#ec932f', '#f4c20d'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

new Chart(incomeChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Dividends', 'Salary', 'Transactions', 'Other'],
        datasets: [{
            data: [3103, 2268, 1738, 911],
            backgroundColor: ['#3cba9f', '#f4c20d', '#4caf50', '#d9534f'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

new Chart(balanceChartCtx, {
    type: 'line',
    data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            data: [20, 30, 15, 40, 35, 50],
            borderColor: '#3e95cd',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
