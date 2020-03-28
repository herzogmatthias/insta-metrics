import { TooltipProps } from "recharts";
import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  tooltipPadding: {
    padding: theme.spacing(2)
  },
  borderTooltip: {
    borderLeft: "5px solid #ff7300"
  },
  mainPadding: {
    paddingLeft: "5px"
  },
  h6responsive: {
    fontSize: "1.1rem",
    "@media (max-width:600px)": {
      fontSize: "0.9rem"
    }
  },
  body1responsive: {
    fontSize: "0.9rem",
    "@media (max-width:600px)": {
      fontSize: "0.6rem"
    }
  },
  body2responsive: {
    fontSize: "0.7rem",
    "@media (max-width:600px)": {
      fontSize: "0.55rem"
    }
  }
}));
interface CustomToolTipProps {
  props: TooltipProps;
  type: string;
}

export default function CustomToolTip(props: CustomToolTipProps) {
  const classes = useStyles();
  if (props.props.active) {
    return (
      <Paper className={classes.tooltipPadding} elevation={3}>
        <div className={classes.borderTooltip}>
          <Typography
            className={clsx(classes.mainPadding, classes.h6responsive)}
            variant="h6"
          >
            {props.type}: {props.props.payload![0].value}
          </Typography>
        </div>

        <Typography className={classes.body1responsive} variant="body1">
          posted on {props.props.payload![0].payload.name}
        </Typography>
        <Typography
          className={classes.body2responsive}
          variant="body2"
          color="textSecondary"
        >
          click to see the Photo
        </Typography>
      </Paper>
    );
  } else {
    return null;
  }
}
