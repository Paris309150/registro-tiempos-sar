// Gráfico de Tendencias
const datosTendencias = {
    labels: ["Ingresos", "Altas AD", "Traslados Ambulancia", "Procedimiento Policial", "Derivados al SAR"],
    datasets: [
        {
            label: "Turno 1",
            data: [526, 43, 0, 0, 0],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true
        },
        {
            label: "Turno 2",
            data: [678, 49, 14, 30, 11],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true
        },
        {
            label: "Turno 3",
            data: [490, 31, 5, 15, 2],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true
        }
    ]
};

const ctxTendencias = document.getElementById('graficoTendencias').getContext('2d');
new Chart(ctxTendencias, {
    type: 'line',
    data: datosTendencias,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        }
    }
});
