import {
  makeStyles,
  Theme,
  createStyles,
  useMediaQuery,
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
import { Comment } from "../../../redux/types/advancedStatsTypes";

interface Props {
  comments: Comment[];
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
  const matches = useMediaQuery("(max-width: 750px)");
  return (
    <div className={classes.root}>
      <List>
        <ListSubheader className={classes.whiteBackground} component="div">
          Preview Comments
        </ListSubheader>
        {props.comments.map((val, ind) => {
          return (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={val.owner.avatar}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={val.owner.username}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="p"
                        variant="body2"
                        color="textPrimary"
                      >
                        {val.text}
                      </Typography>
                      <div className={classes.flex}>
                        {"posted on " +
                          format(
                            new Date(val.timeStamp * 1000),
                            "MMMM, d yyyy"
                          ) +
                          " - " +
                          val.likes}{" "}
                        <FavoriteIcon></FavoriteIcon>
                      </div>
                    </React.Fragment>
                  }
                ></ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
      </List>
    </div>
  );
}
