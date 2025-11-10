function initializeCharts() {
    console.log('Inicializando gráficas...');
    
    // Verificar que Chart.js esté disponible
    if (typeof Chart === 'undefined') {
        console.error('Chart.js no está disponible');
        return;
    }
    
    // Verificar si Chart.js está disponible
    if (typeof Chart === 'undefined') {
        console.error('Chart.js no está cargado');
        return;
    }

    // Verificar si los elementos del DOM existen
    const elements = {
        activeVsFinished: document.getElementById('activeVsFinished'),
        processByType: document.getElementById('processByType'),
        processByResponsible: document.getElementById('processByResponsible'),
        processByMonth: document.getElementById('processByMonth')
    };

    // Verificar que todos los elementos existan
    for (let key in elements) {
        if (!elements[key]) {
            console.error(`Elemento ${key} no encontrado`);
            return;
        }
    }

    console.log('Todos los elementos encontrados, inicializando gráficas...');
    // Gráfica de Procesos Activos vs. Finalizados (Líneas)
    new Chart(document.getElementById('activeVsFinished'), {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'Ma', 'Nov', 'Dic'],
            datasets: [
                {
                    label: 'Activos',
                    data: [50, 65, 75, 85, 90, 105, 120],
                    borderColor: '#71a5c9',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Finalizados',
                    data: [20, 30, 35, 45, 50, 65, 75],
                    borderColor: '#95c2a6',
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 15,
                        usePointStyle: true
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 150,
                    ticks: {
                        stepSize: 50
                    }
                }
            }
        }
    });

    // Gráfica de Procesos por Tipo (Barras horizontales)
    new Chart(document.getElementById('processByType'), {
        type: 'bar',
        data: {
            labels: ['Disciplinario', 'Contractual', 'Civil', 'Otro'],
            datasets: [{
                data: [85, 65, 40, 30],
                backgroundColor: '#71a5c9',
                barThickness: 20
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfica de Procesos por Responsable (Dona)
    new Chart(document.getElementById('processByResponsible'), {
        type: 'doughnut',
        data: {
            labels: ['Abogado', 'Funcionario'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#71a5c9', '#95c2a6']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 15
                    }
                }
            },
            cutout: '70%'
        }
    });

    // Gráfica de Procesos Registrados por Mes (Barras verticales)
    new Chart(document.getElementById('processByMonth'), {
        type: 'bar',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'Mar', 'Jun', 'Oct', 'Dic'],
            datasets: [{
                data: [15, 25, 30, 65, 30, 35, 70, 15],
                backgroundColor: '#71a5c9',
                barThickness: 20
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 50
                    }
                }
            }
        }
    });
}