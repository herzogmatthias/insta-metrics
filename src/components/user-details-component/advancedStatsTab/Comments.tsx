import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  ListSubheader,
} from "@material-ui/core";
import format from "date-fns/format";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import { IComment } from "../../../redux/types/advancedStatsTypes";
import { FakeLoadingList } from "../../fake-loading-list-component/FakeLoadingList";

interface Props {
  comments: IComment[] | undefined;
  loaded: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxHeight: "588px",
      overflowY: "auto",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
    whiteBackground: {
      backgroundColor: "white",
    },
  })
);

export default function Comments(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <ListSubheader className={classes.whiteBackground} component="div">
          Preview Comments
        </ListSubheader>
        {props.loaded && props.comments?.length !== 0 ? (
          <>
            {props.comments!.map((val, ind) => {
              return (
                <div key={ind}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={val.owner.avatar}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={val.owner.username}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {val.text}
                          </Typography>
                          <span className={classes.flex}>
                            {"posted on " +
                              format(
                                new Date(val.timeStamp * 1000),
                                "MMMM, d yyyy"
                              ) +
                              " - " +
                              val.likes}{" "}
                            <FavoriteIcon></FavoriteIcon>
                          </span>
                        </React.Fragment>
                      }
                    ></ListItemText>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
          </>
        ) : props.loaded && props.comments?.length === 0 ? (
          <ListItem>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  No Comments detected
                </Typography>
              }
            ></ListItemText>
          </ListItem>
        ) : (
          <FakeLoadingList length={3}></FakeLoadingList>
        )}
      </List>
    </div>
  );
}
