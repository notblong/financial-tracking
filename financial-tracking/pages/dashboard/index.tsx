import { Doughnut, Line, Pie } from "react-chartjs-2";
import Card, { CardWidth } from "../../components/card";
import styles from "../../styles/Home.module.css";

export enum ChartType {
  Line = "line",
  Pie = "pie",
  Bar = "bar",
  Doughnut = "doughnut",
}

export interface IDashboardCard<T> {
  type: T | any;
  title: string;
  data: any;
  width: CardWidth;
}

export class DashboardCard<T> implements IDashboardCard<T> {
  type!: T;
  title!: string;
  data: any;
  width!: CardWidth;

  constructor(init?: Partial<DashboardCard<T>>) {
    Object.assign(this, init);
  }
}

export default function Index() {
  const dashboardCards: DashboardCard<ChartType>[][] = [
    [
      new DashboardCard<ChartType.Line>({
        title: "My Daily income",
        type: ChartType.Line,
        data: dataLine,
        width: CardWidth.Full,
      }),
    ],
    [
      new DashboardCard<ChartType.Pie>({
        title: "Overall outcome",
        type: ChartType.Pie,
        width: CardWidth.Three,
        data: dataPie,
      }),
      new DashboardCard<ChartType.Doughnut>({
        title: "Outcome categories",
        type: ChartType.Doughnut,
        width: CardWidth.Three,
        data: dataDoughnut,
      }),
      new DashboardCard<ChartType.Doughnut>({
        title: "Outcome categories",
        type: ChartType.Doughnut,
        width: CardWidth.Three,
        data: dataDoughnut,
      }),
    ],
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>Dashboard</h1>
        {dashboardCards.map((row, index) => (
          <div className="flex" key={index}>
            {row.map((card, index) => (
              <Card title={card.title} width={card.width} key={index}>
                <>
                  {card.type == ChartType.Line && <Line data={card.data} />}
                  {card.type == ChartType.Pie && <Pie data={card.data} />}
                  {card.type == ChartType.Doughnut && <Doughnut data={card.data} />}
                </>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export const dataLine = {
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
};

export const dataPie = {
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

export const dataDoughnut = {
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
