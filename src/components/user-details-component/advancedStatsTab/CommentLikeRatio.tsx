import {
  makeStyles,
  Theme,
  createStyles,
  useMediaQuery,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Ranking } from "../../../redux/types/advancedStatsTypes";
import randomColor from "randomcolor";

interface Props {
  rankings: Ranking[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circleSize: {
      margin: theme.spacing(2),
    },
    flex: {
      display: "flex",
      justifyContent: "center",
    },
    textAlign: {
      textAlign: "center",
    },
  })
);

export default function CommentLikeRatio(props: Props) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.flex}>
      {props.rankings.map((val, ind) => {
        return (
          <Grid item xs={6} key={ind}>
            <CircularProgressbarWithChildren
              value={val.percentage}
              strokeWidth={4}
              styles={buildStyles({
                pathColor: randomColor(),
                trailColor: "transparent",
              })}
            >
              <div className={classes.textAlign}>
                <Typography variant="subtitle1">
                  Rank <strong>{val.rank}</strong> of 50
                </Typography>
                <Typography variant="body1">
                  Top <strong>{100 - val.percentage}%</strong> of{" "}
                  <strong>{val.type}</strong>
                </Typography>
              </div>
            </CircularProgressbarWithChildren>
          </Grid>
        );
      })}
    </Grid>
  );
}
