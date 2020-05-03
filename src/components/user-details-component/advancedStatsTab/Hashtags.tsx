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
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { IHashTag } from "../../../redux/types/advancedStatsTypes";
import { FakeLoadingList } from "../../fake-loading-list-component/FakeLoadingList";

interface Props {
  hashTags: IHashTag[] | undefined;
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
        {props.loaded && props.hashTags?.length !== 0 ? (
          <>
            {props.hashTags!.map((val, ind) => {
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
                      <IconButton
                        onClick={() =>
                          window.open(
                            `https://www.instagram.com/explore/tags/${val.name}`
                          )
                        }
                        edge="end"
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
          </>
        ) : props.loaded && props.hashTags?.length === 0 ? (
          <ListItem>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  No Hashtags detected
                </Typography>
              }
            ></ListItemText>
          </ListItem>
        ) : (
          <FakeLoadingList length={3}></FakeLoadingList>
        )}
      </List>
    </>
  );
});

export default Hashtags;
