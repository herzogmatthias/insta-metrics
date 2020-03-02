import React, { Component } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducer";
import { connect, ConnectedProps } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import clsx from "clsx";
import {
  makeStyles,
  Avatar,
  Typography,
  Card,
  Paper,
  Grid,
  Button
} from "@material-ui/core";
import BasicStatsCard from "./BasicStatsCard";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles(theme => ({
  flex: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  paddingName: {
    paddingLeft: theme.spacing(2)
  },
  paddingVerified: {
    paddingRight: theme.spacing(2)
  },
  instaButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1)
  },
  avatarGrow: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    },
    [theme.breakpoints.up("sm")]: {
      flexGrow: 0
    }
  },
  button: {
    "&:hover": {
      backgroundPosition: "100%"
    },
    transition: "0.5s",
    backgroundSize: "200%",
    backgroundImage:
      "linear-gradient(45deg,#FFDC80 0%,#FCAF45,#F77737,#F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)",
    color: "white"
  },
  verifiedColor: {
    color: "#3897f0"
  },
  space: {
    marginBottom: theme.spacing(2)
  },
  cardMargin: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  textDirection: {
    textAlign: "center"
  }
}));

function BasicTab(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.space}>
        <Grid container spacing={0}>
          <Grid className={clsx(classes.flex, classes.avatarGrow)} item>
            <Avatar
              className={classes.large}
              src={props.basicStats.avatar}
            ></Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              className={classes.paddingName}
              item
              xs
              container
              direction="column"
              spacing={0}
            >
              <Grid item xs>
                <Typography variant="h6">{props.basicStats.name}</Typography>
                <Typography gutterBottom variant="body2" color="textSecondary">
                  @{props.basicStats.userName}
                </Typography>
                <Typography variant="body2">
                  {props.basicStats.biography}
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.paddingVerified} item>
              <CheckCircleIcon
                className={classes.verifiedColor}
              ></CheckCircleIcon>
            </Grid>
          </Grid>
          <Grid className={classes.instaButtonContainer} item>
            <Button className={classes.button} variant="contained">
              Show More
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        className={classes.textDirection}
        container
        spacing={0}
        xs={12}
        direction="row"
      >
        <Grid className={classes.cardMargin} xs={12} sm={4} item>
          <BasicStatsCard
            data={props.basicStats.posts}
            name="Posts"
          ></BasicStatsCard>
        </Grid>
        <Grid className={classes.cardMargin} xs={12} sm={4} item>
          <BasicStatsCard
            data={props.basicStats.follower}
            name="Followers"
          ></BasicStatsCard>
        </Grid>
        <Grid className={classes.cardMargin} xs={12} sm={4} item>
          <BasicStatsCard
            data={props.basicStats.following}
            name="Following"
          ></BasicStatsCard>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  tab: state.userDetails.tab,
  basicStats: state.userDetails.basicStats
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(BasicTab);
