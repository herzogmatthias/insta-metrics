import React from "react";
import { TooltipProps } from "@material-ui/core";
import {
  Line,
  ResponsiveContainer,
  Tooltip,
  ComposedChart,
  CartesianGrid,
  YAxis,
  Area,
} from "recharts";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CustomToolTip from "./CustomToolTip";
import { ChartData } from "../../../redux/types/userDetailsTypes";

interface Props {
  data: ChartData[];
  type: string;
}

export default function BasicStatsChart(props: Props) {
  const aspectForGraph = useMediaQuery("(max-width: 1500px)");
  return (
    <ResponsiveContainer width="99%" aspect={aspectForGraph ? 4 : 5}>
      <ComposedChart onClick={(ev: any) => console.log(ev)} data={props.data}>
        <YAxis
          domain={["auto", "auto"]}
          orientation="right"
          padding={{ top: 20, bottom: 0 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          content={(tProps: TooltipProps) => (
            <CustomToolTip type={props.type} props={tProps}></CustomToolTip>
          )}
          cursor={{ fill: "lightGrey" }}
          isAnimationActive={false}
        />
        <CartesianGrid stroke="#e4e4e4" strokeDasharray="3 3" />
        <Area
          isAnimationActive={false}
          type="monotone"
          dataKey="data"
          fill="url(#colorUv)"
          stroke="#8884d8"
        ></Area>
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="data"
          stroke="#ff7300"
        />
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ee0979" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#ff6a00" stopOpacity={0.5} />
          </linearGradient>
        </defs>
      </ComposedChart>
    </ResponsiveContainer>
  );
}
