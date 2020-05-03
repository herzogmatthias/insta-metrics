import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import numeral from "numeral";
import clsx from "clsx";
import randomColor from "randomcolor";
import {
  makeStyles,
  Avatar,
  Typography,
  Paper,
  Grid,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Chip,
  useMediaQuery,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { IBasicTabStats, ITag } from "../../../redux/types/userDetailsTypes";

interface IProps {
  dataLoaded: boolean;
  tagsLoaded: boolean;
  basicStats: IBasicTabStats;
  tags: ITag[];
}

const useStyles = makeStyles((theme) => ({
  flex: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  flexVerified: {
    display: "flex",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paddingName: {
    paddingLeft: theme.spacing(2),
  },
  paddingVerified: {
    paddingRight: theme.spacing(2),
  },
  instaButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
  },
  avatarGrow: {
    padding: theme.spacing(2),
  },
  button: {
    "&:hover": {
      backgroundPosition: "100%",
    },
    transition: "0.5s",
    backgroundSize: "200%",
    backgroundImage:
      "linear-gradient(45deg,#FFDC80 0%,#FCAF45,#F77737,#F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)",
    color: "white",
  },
  verifiedColor: {
    color: "#3897f0",
  },
  cardMargin: {
    margin: theme.spacing(2),
    "@media (max-width:600px)": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

function GeneralInformation(props: IProps) {
  const checkFormat = (data: number) => {
    return data % 1000 === 0 || data % 1000 === data ? "0a" : "0.0a";
  };
  const media = useMediaQuery("max-width: 400px");
  const classes = useStyles();
  return (
    <Grid className={classes.flex} container spacing={0}>
      <Grid style={{ flexGrow: 1 }} className={classes.cardMargin} item md={5}>
        <Paper elevation={media ? 0 : 3}>
          <Grid container spacing={0}>
            <Grid
              className={clsx(classes.flex, classes.avatarGrow)}
              xs={12}
              item
            >
              <Avatar
                className={classes.large}
                src={props.dataLoaded ? props.basicStats.avatar : undefined}
              ></Avatar>
            </Grid>
            <Grid item xs={12} container>
              <Grid
                className={clsx(classes.flex, classes.paddingName)}
                item
                xs
                container
                direction="column"
                spacing={0}
              >
                <Grid item xs={12}>
                  {props.dataLoaded ? (
                    <>
                      <Typography className={classes.flexVerified} variant="h6">
                        {props.basicStats.name}
                        {props.basicStats.isVerified ? (
                          <CheckCircleIcon
                            className={classes.verifiedColor}
                          ></CheckCircleIcon>
                        ) : null}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        @{props.basicStats.userName}
                      </Typography>
                      <Typography variant="body2">
                        {props.basicStats.description}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Skeleton width="200px" variant="text"></Skeleton>
                      <Skeleton variant="text"></Skeleton>
                      <Skeleton variant="text"></Skeleton>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.instaButtonContainer} item>
              <Button
                onClick={() =>
                  window.open(
                    `https://www.instagram.com/${props.basicStats.userName}`,
                    "_blank"
                  )
                }
                className={classes.button}
                variant="contained"
              >
                Show More
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid style={{ flexGrow: 1 }} className={classes.cardMargin} item md={5}>
        <Paper elevation={media ? 0 : 3}>
          <List>
            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <PhotoLibraryIcon></PhotoLibraryIcon>
                </Avatar>
              </ListItemAvatar>
              {props.dataLoaded ? (
                <ListItemText
                  primary={
                    numeral(props.basicStats.posts).format(
                      checkFormat(props.basicStats.posts)
                    ) + " Posts"
                  }
                ></ListItemText>
              ) : (
                <ListItemText
                  primary={<Skeleton variant="text" width="80%"></Skeleton>}
                ></ListItemText>
              )}
            </ListItem>

            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <GroupAddIcon></GroupAddIcon>
                </Avatar>
              </ListItemAvatar>
              {props.dataLoaded ? (
                <ListItemText
                  primary={
                    numeral(props.basicStats.followers).format(
                      checkFormat(props.basicStats.followers)
                    ) + " Followers"
                  }
                ></ListItemText>
              ) : (
                <ListItemText
                  primary={<Skeleton variant="text" width="80%"></Skeleton>}
                ></ListItemText>
              )}
            </ListItem>
            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <PersonAddIcon></PersonAddIcon>
                </Avatar>
              </ListItemAvatar>
              {props.dataLoaded ? (
                <ListItemText
                  primary={
                    numeral(props.basicStats.following).format(
                      checkFormat(props.basicStats.following)
                    ) + " Following"
                  }
                ></ListItemText>
              ) : (
                <ListItemText
                  primary={<Skeleton variant="text" width="80%"></Skeleton>}
                ></ListItemText>
              )}
            </ListItem>
            <ListItem>
              {props.tagsLoaded ? (
                <Grid spacing={1} container>
                  {props.tags.map((val, ind) => {
                    return (
                      <Grid key={ind} item xs={4}>
                        <Chip
                          style={{
                            width: "100%",
                            backgroundColor: randomColor(),
                            color: "white",
                          }}
                          label={val.tag.en}
                        ></Chip>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                Array.apply(null, Array(3)).map((val, ind) => {
                  return (
                    <Skeleton
                      key={ind}
                      variant="text"
                      width="60px"
                      height="30px"
                      style={{ marginRight: "5px" }}
                    ></Skeleton>
                  );
                })
              )}
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default GeneralInformation;
