import React, { Component, useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, ConnectedProps } from "react-redux";
import { makeStyles, Grid, Typography } from "@material-ui/core";
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

  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div>
      <Grid spacing={2} container>
        <Grid item xs={12} md={4}>
          <AdvancedStatsChart
            type="Likes"
            data={props.likesData}
          ></AdvancedStatsChart>
        </Grid>
        <Grid item xs={12} md={4}>
          <AdvancedStatsChart
            type="Comments"
            data={props.commentsData}
          ></AdvancedStatsChart>
        </Grid>
        <Grid item xs={12} md={4}>
          <AdvancedStatsChart
            type="Engagement Rate"
            data={props.engagementRateData}
          ></AdvancedStatsChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <div dangerouslySetInnerHTML={{ __html: props.embedHtml }}></div>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  likesData: state.advancedStats.likesData,
  commentsData: state.advancedStats.commentsData,
  engagementRateData: state.advancedStats.engagementRateData,
  embedHtml: state.advancedStats.embedHtml
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AdvancedStatsTab);
