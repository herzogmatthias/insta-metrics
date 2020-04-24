import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  Divider,
  ListSubheader,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { HashTag } from "../../../redux/types/advancedStatsTypes";
import { FakeLoadingList } from "../../fake-loading-list-component/FakeLoadingList";

interface Props {
  hashTags: HashTag[];
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

const Hashtags = React.memo((props: Props) => {
  const classes = useStyles();
  return (
    <>
      <List>
        <ListSubheader className={classes.whiteBackground} component="div">
          HashTags in Caption
        </ListSubheader>
        {props.loaded ? (
          <>
            {props.hashTags.map((val, ind) => {
              return (
                <div key={ind}>
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
          </>
        ) : (
          <FakeLoadingList length={3}></FakeLoadingList>
        )}
      </List>
    </>
  );
});

export default Hashtags;
