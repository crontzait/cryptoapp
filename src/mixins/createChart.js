import Chart from "chart.js";

const createWeekChart = {

  mounted() {
    setTimeout(() => {
      this.createWeekChart()
    }, 3000
    )


  },
  methods: {
    createWeekChart() {
      const ctx = document.getElementById('weekchart').getContext('2d');

      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.xrpDataSet.dataLabels.dataLabelsWeek,
          datasets: [
            {
              data: this.xrpDataSet.data.week,
              label: this.xrpDataSet.label,
              fill: false,
              borderColor: "#FF8484",
              borderWidth: 1,

            },
            {
              data: this.ethDataSet.data.week,
              label: this.ethDataSet.label,
              fill: false,
              borderColor: "#4DCCBD"
            },
            {
              data: this.btcDataSet.data.week,
              label: this.btcDataSet.label,
              fill: true,
              borderColor: "#231651"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }


      })
    },
    createMonthChart() {
      const ctx = document.getElementById('monthchart').getContext('2d');

      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.xrpDataSet.dataLabels.dataLabelsMonth,
          datasets: [
            {
              data: this.xrpDataSet.data.month,
              label: this.xrpDataSet.label,
              fill: false,
              borderColor: "#FF8484",
              borderWidth: 1,

            },
            {
              data: this.ethDataSet.data.month,
              label: this.ethDataSet.label,
              fill: false,
              borderColor: "#4DCCBD"
            },
            {
              data: this.btcDataSet.data.month,
              label: this.btcDataSet.label,
              fill: true,
              borderColor: "#231651"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }


      })
    },

    createYearChart() {
      const ctx = document.getElementById('yearchart').getContext('2d');

      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.xrpDataSet.dataLabels.dataLabelsYear,
          datasets: [
            {
              data: this.xrpDataSet.data.year,
              label: this.xrpDataSet.label,
              fill: false,
              borderColor: "#FF8484",
              borderWidth: 1,

            },
            {
              data: this.ethDataSet.data.year,
              label: this.ethDataSet.label,
              fill: false,
              borderColor: "#4DCCBD"
            },
            {
              data: this.btcDataSet.data.year,
              label: this.btcDataSet.label,
              fill: true,
              borderColor: "#231651"
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }


      })
    },





  }
}

export default createWeekChart;