import React, { Component } from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import clsx from "clsx";

interface Props {
  data: number;
  name: "Followers" | "Following" | "Posts";
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
  iconSize: {
    fontSize: "1.1rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem"
    }
  }
}));

export default function BasicStatsCard(props: Props) {
  const classes = useStyles();
  return (
    <Card>
      <Grid container spacing={0}>
        <Grid className={clsx(classes.flex, classes.cardPadding)} xs={4} item>
          <PhotoLibraryIcon className={classes.iconSize}></PhotoLibraryIcon>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography variant="h3">{props.data}</Typography>
              <Typography variant="h6">{props.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
