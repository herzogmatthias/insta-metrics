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
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Comment, HashTag } from "../../../redux/types/advancedStatsTypes";

interface Props {
  hashTags: HashTag[];
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

export default function HashTags(props: Props) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 750px)");
  return (
    <div className={classes.root}>
      <List>
        <ListSubheader className={classes.whiteBackground} component="div">
          HashTags in Caption
        </ListSubheader>
        {props.hashTags.map((val, ind) => {
          return (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>#</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={val.name}
                  secondary={val.posts + " posts"}
                ></ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
      </List>
    </div>
  );
}
