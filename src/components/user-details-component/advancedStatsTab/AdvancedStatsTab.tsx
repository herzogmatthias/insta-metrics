import React, { Component } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, ConnectedProps } from "react-redux";
import { makeStyles, Grid } from "@material-ui/core";
import { RootState } from "../../../redux/reducer";
import AdvancedStatsChart from "./AdvancedStatsChart";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles(theme => ({
  flex: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  flexVerified: {
    display: "flex",
    alignItems: "center"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  iconSize: {
    "@media (min-width:600px)": {
      fontSize: "1.7rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem"
    }
  },
  space: {
    marginBottom: theme.spacing(2)
  },
  cardMargin: {
    margin: theme.spacing(2),
    "@media (max-width:600px)": {
      marginLeft: 0,
      marginRight: 0
    }
  },
  textDirection: {
    textAlign: "center"
  }
}));

function AdvancedStatsTab(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid className={classes.flex} item xs={12} md={6}>
          <AdvancedStatsChart data={props.likesData}></AdvancedStatsChart>
        </Grid>
        <Grid className={classes.flex} item xs={12} md={6}>
          <AdvancedStatsChart data={props.commentsData}></AdvancedStatsChart>
        </Grid>
        <Grid className={classes.flex} item xs={12} md={6}>
          <AdvancedStatsChart
            data={props.engagementRateData}
          ></AdvancedStatsChart>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  likesData: state.advancedStats.likesData,
  commentsData: state.advancedStats.commentsData,
  engagementRateData: state.advancedStats.engagementRateData
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AdvancedStatsTab);
