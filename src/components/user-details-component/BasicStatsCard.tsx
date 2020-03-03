import React, { Component } from "react";
import {
  Card,
  Grid,
  Typography,
  makeStyles,
  Fade,
  Paper
} from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import clsx from "clsx";
import numeral from "numeral";

interface Props {
  data: number;
  name: "Followers" | "Following" | "Posts";
  fadeTimeOut: number;
}

const useStyles = makeStyles(theme => ({
  flex: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  cardPadding: {
    padding: theme.spacing(2)
  },
  textColor: {},
  iconSize: {
    "@media (min-width:600px)": {
      fontSize: "1.7rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem"
    }
  }
}));

export default function BasicStatsCard(props: Props) {
  const classes = useStyles();

  const renderIcon = () => {
    if (props.name === "Followers") {
      return (
        <GroupAddIcon
          className={clsx(classes.iconSize, classes.textColor)}
        ></GroupAddIcon>
      );
    } else if (props.name === "Posts") {
      return <PhotoLibraryIcon className={classes.iconSize}></PhotoLibraryIcon>;
    } else {
      return <PersonAddIcon className={classes.iconSize}></PersonAddIcon>;
    }
  };
  return (
    <Fade in timeout={{ enter: props.fadeTimeOut }}>
      <Paper elevation={3}>
        <Grid className={classes.flex} container spacing={0}>
          <Grid
            className={clsx(classes.cardPadding, classes.textColor)}
            xs={4}
            item
          >
            {renderIcon()}
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography variant="h4">
                  {numeral(props.data).format(
                    props.data % 1000 === 0 || props.data % 1000 === props.data
                      ? "0a"
                      : "0.0a"
                  )}{" "}
                  {props.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
}
