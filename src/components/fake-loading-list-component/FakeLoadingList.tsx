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
    skeletonCircle: {
      height: "40px",
      width: "40px",
    },
  })
);

export function FakeLoadingList(props: Props) {
  const classes = useStyles();
  return (
    <div>
      {Array.apply(null, Array(props.length)).map((val, ind) => {
        return (
          <ListItem key={ind}>
            <ListItemAvatar>
              <Avatar>
                <Skeleton
                  className={clsx(classes.skeletonCircle)}
                  animation="wave"
                  variant="circle"
                ></Skeleton>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={<Skeleton animation="wave" variant="text"></Skeleton>}
              primary={<Skeleton animation="wave" variant="text"></Skeleton>}
            ></ListItemText>
          </ListItem>
        );
      })}
    </div>
  );
}
