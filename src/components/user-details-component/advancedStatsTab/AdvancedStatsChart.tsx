import React, { Component } from "react";
import { Grid, Typography, makeStyles, Fade, Paper } from "@material-ui/core";
import numeral from "numeral";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import clsx from "clsx";
import { ChartData } from "../../../redux/types/advancedStatsTypes";

interface Props {
  data: ChartData[];
}

const useStyles = makeStyles(theme => ({
  flex: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    minHeight: "inherit"
  },
  cardPadding: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2)
  }
}));

export default function AdvancedStatsChart(props: Props) {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <LineChart width={400} height={200} data={props.data}>
        <Line type="monotone" dataKey="data" stroke="#8884d8" />
        <Tooltip></Tooltip>
      </LineChart>
    </Paper>
  );
}
