import { LineChart } from "@mui/x-charts/LineChart";

interface SimpleLineChartProps {
  data: {
    cases: Record<string, number | null>;
    deaths: Record<string, number | null>;
    recovered: Record<string, number | null>;
  };
}

export default function SimpleLineChart({ data }: SimpleLineChartProps) {
  const casesData = Object.values(data?.cases || {});
  const deathsData = Object.values(data?.deaths || {});
  const recoveredData = Object.values(data?.recovered || {});

  const xLabels = Object.keys(data?.cases || {});
  return (
    <LineChart
        height={300}
      series={[
        { data: casesData, label: "Cases", color: 'orange' },
        { data: deathsData, label: "Deaths", color: 'red' },
        { data: recoveredData, label: "Recovered", color: 'green' },
      ]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    />
  );
}
