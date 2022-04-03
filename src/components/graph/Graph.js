import "./Graph.css";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function Graph({ salesData }) {
  return (
    <div className="panel graph-panel m-3">
      <Line
        data={salesData}
        options={{
          title: {
            display: true,
            text: "Retail Sales",
            fontSize: 25,
          },
          legend: {
            position: "right",
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                  display: false,
                },
              },
            ],
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
        }}
      />
    </div>
  );
}

export default Graph;
