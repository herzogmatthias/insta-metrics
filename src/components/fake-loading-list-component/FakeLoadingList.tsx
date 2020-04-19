import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import clsx from "clsx";

export interface Props {
  length: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skeletonBackground: {
      backgroundColor: "lightgrey",
    },
    skeletonCircle: {
      height: "40px",
      width: "40px",
    },
  })
);

export function FakeLoadingList(props: Props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      {Array.apply(null, Array(props.length)).map((val, ind) => {
        return (
          <ListItem key={ind}>
            <ListItemAvatar>
              <Avatar>
                <Skeleton
                  className={clsx(
                    classes.skeletonBackground,
                    classes.skeletonCircle
                  )}
                  animation="wave"
                  variant="circle"
                ></Skeleton>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={
                <Skeleton
                  animation="wave"
                  className={classes.skeletonBackground}
                  variant="text"
                ></Skeleton>
              }
              primary={
                <Skeleton
                  animation="wave"
                  className={classes.skeletonBackground}
                  variant="text"
                ></Skeleton>
              }
            ></ListItemText>
          </ListItem>
        );
      })}
    </div>
  );
}
