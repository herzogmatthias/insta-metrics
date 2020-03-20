import React, { Component } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Fade,
  Paper,
  TooltipProps,
  Divider
} from "@material-ui/core";
import numeral from "numeral";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area
} from "recharts";
import clsx from "clsx";
import { ChartData } from "../../../redux/types/advancedStatsTypes";
import { type } from "os";
import CustomToolTip from "./CustomToolTip";

interface Props {
  data: ChartData[];
  type: "Comments" | "Likes" | "Engagement Rate";
}

const useStyles = makeStyles(theme => ({
  h5Responsive: {
    fontSize: "1.5rem",
    padding: "15px",
    "@media (max-width:600px)": {
      fontSize: "1rem"
    }
  },
  seperator: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    "&:before": {
      marginRight: ".25em"
    },
    "&:after": {
      marginLeft: ".25em"
    },
    "&:after, &:before": {
      content: "close-quote",
      flex: 1,
      borderBottom: "2px solid #9e9e9e"
    }
  }
}));

export default function AdvancedStatsChart(props: Props) {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Typography
        className={clsx(classes.seperator, classes.h5Responsive)}
        align="center"
        variant="h5"
      >
        {props.type} for last 11 Pictures
      </Typography>
      <ResponsiveContainer width="99%" aspect={3}>
        <ComposedChart
          onClick={(ev: any) => console.log(ev)}
          syncId="mainChart"
          data={props.data}
        >
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
    </Paper>
  );
}
