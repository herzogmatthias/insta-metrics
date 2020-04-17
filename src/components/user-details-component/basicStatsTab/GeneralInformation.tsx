import React from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/reducer";
import { connect, ConnectedProps } from "react-redux";
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
} from "@material-ui/core";

type Props = ConnectedProps<typeof connector>;

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

function GeneralInformation(props: Props) {
  const checkFormat = (data: number) => {
    return data % 1000 === 0 || data % 1000 === data ? "0a" : "0.0a";
  };
  const classes = useStyles();
  return (
    <Grid className={classes.flex} container spacing={0}>
      <Grid style={{ flexGrow: 1 }} className={classes.cardMargin} item md={5}>
        <Paper elevation={3}>
          <Grid container spacing={0}>
            <Grid
              className={clsx(classes.flex, classes.avatarGrow)}
              xs={12}
              item
            >
              <Avatar
                className={classes.large}
                src={props.basicStats.avatar}
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
                <Grid item xs>
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
                    {props.basicStats.biography}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.instaButtonContainer} item>
              <Button className={classes.button} variant="contained">
                Show More
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid style={{ flexGrow: 1 }} className={classes.cardMargin} item md={5}>
        <Paper elevation={3}>
          <List>
            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <PhotoLibraryIcon></PhotoLibraryIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  numeral(props.basicStats.posts).format(
                    checkFormat(props.basicStats.posts)
                  ) + " Posts"
                }
              ></ListItemText>
            </ListItem>

            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <GroupAddIcon></GroupAddIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  numeral(props.basicStats.follower).format(
                    checkFormat(props.basicStats.follower)
                  ) + " Followers"
                }
              ></ListItemText>
            </ListItem>
            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <PersonAddIcon></PersonAddIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  numeral(props.basicStats.following).format(
                    checkFormat(props.basicStats.following)
                  ) + " Following"
                }
              ></ListItemText>
            </ListItem>
            <ListItem>
              {props.basicStats.tags.map((val, ind) => {
                return (
                  <Chip
                    key={ind}
                    style={{
                      marginRight: "5px",
                      backgroundColor: randomColor(),
                      color: "white",
                    }}
                    label={val}
                  ></Chip>
                );
              })}
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state: RootState) => ({
  tab: state.userDetails.tab,
  basicStats: state.userDetails.basicStats,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(GeneralInformation);
