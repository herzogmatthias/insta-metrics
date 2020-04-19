import * as React from "react";
import format from "date-fns/format";
import { IDM } from "../../../redux/types/adminTypes";
import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import { FakeLoadingList } from "../../fake-loading-list-component/FakeLoadingList";

export interface Props {
  dms: IDM[];
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

export function DirectMessages(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListSubheader className={classes.whiteBackground} component="div">
          Direct Messages
        </ListSubheader>
        {props.loaded ? (
          props.dms.map((val, ind) => {
            return (
              <div key={ind}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={val.avatarUrl}></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={val.username}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {val.lastMessage}
                        </Typography>
                        <span className={classes.flex}>
                          {"posted on " +
                            format(new Date(val.date), "MMMM, d yyyy")}
                        </span>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            );
          })
        ) : (
          <FakeLoadingList length={4}></FakeLoadingList>
        )}
      </List>
    </div>
  );
}
