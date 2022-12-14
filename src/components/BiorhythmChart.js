import dayjs from "dayjs";
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculationBiorhythmSeries } from "../utils/calculations";
import './BiorhythmChart.css';

export const BiorhythmChart = ({dateOfBirth, targetDate}) => {
  const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
  const data = calculationBiorhythmSeries(dateOfBirth, startDate, 31);

  return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} stroke="#000" />
        <Line dot={false} type="natural" dataKey="physical" className="physical" />
        <Line dot={false} type="natural" dataKey="emotional"className="emotional" />
        <Line dot={false} type="natural" dataKey="intellectual" className="intellectual" />
      </LineChart>
    </ResponsiveContainer>
  );
}