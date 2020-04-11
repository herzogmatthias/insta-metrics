import {
  makeStyles,
  Theme,
  createStyles,
  useMediaQuery,
  Typography,
} from "@material-ui/core";
import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Ranking } from "../../../redux/types/advancedStatsTypes";

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
  const matches = useMediaQuery("(max-width: 750px)");
  return (
    <div className={classes.flex}>
      {props.rankings.map((val) => {
        return (
          <div className={classes.circleSize}>
            <CircularProgressbarWithChildren
              value={val.percentage}
              strokeWidth={5}
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
          </div>
        );
      })}
    </div>
  );
}
