import { Line, Pie } from "react-chartjs-2";
import Card from "../../components/card";
import styles from "../../styles/Home.module.css";

export default function Index() {
  return (
    <>
      <div className={styles.container}>
        <h1>Dashboard</h1>

        <Card title="Line Chart">
          <Line
            datasetIdKey="id"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  // id: 1,
                  label: "",
                  data: [5, 6, 7],
                },
                {
                  // id: 2,
                  label: "",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </Card>

        <Card title="Pie chart">
          <Pie data={data} />
        </Card>
      </div>
    </>
  );
}

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
