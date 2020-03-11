import React, { Component } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Fade,
  Paper
} from "@material-ui/core";
import numeral from "numeral";
import clsx from "clsx";

interface Props {
  data: string | number;
  name: string;
  fadeTimeOut: number;
  iconColor: string;
  icon: any;
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

export default function BasicStatsCard(props: Props) {
  const classes = useStyles();

  return (
    <Fade in timeout={{ enter: props.fadeTimeOut }}>
      <Paper elevation={3}>
        <Grid className={classes.flex} container spacing={0}>
          <Grid
            className={clsx(classes.cardPadding)}
            xs={2}
            item
            style={{ color: props.iconColor }}
          >
            {props.icon}
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography variant="h4">
                  {typeof props.data === "string"
                    ? props.data
                    : numeral(props.data).format(
                        props.data % 1000 === 0 ||
                          props.data % 1000 === props.data
                          ? "0a"
                          : "0.0a"
                      )}{" "}
                  {props.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
}
