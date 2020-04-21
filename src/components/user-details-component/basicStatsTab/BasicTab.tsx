import React from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/reducer";
import { connect, ConnectedProps } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import clsx from "clsx";
import numeral from "numeral";
import { makeStyles, Grid } from "@material-ui/core";
import BasicStatsCard from "./BasicStatsCard";
import GeneralInformation from "./GeneralInformation";
import CarouselWrapper from "./CarouselWrapper";

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
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  iconSize: {
    "@media (min-width:600px)": {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  },
  space: {
    marginBottom: theme.spacing(2),
  },
  cardMargin: {
    margin: theme.spacing(2),
    "@media (max-width:960px)": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  textDirection: {
    textAlign: "center",
  },
}));

function BasicTab(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <GeneralInformation></GeneralInformation>
      <Grid
        className={clsx(classes.textDirection, classes.flex)}
        container
        spacing={0}
        direction="row"
      >
        <Grid className={classes.cardMargin} xs={12} md={5} item>
          <BasicStatsCard
            fadeTimeOut={0}
            data={props.basicStats.avgLikes}
            loaded={props.dataLoaded}
            name="Avg Likes"
            iconColor="#bc2a8d"
            icon={<FavoriteIcon className={classes.iconSize}></FavoriteIcon>}
          ></BasicStatsCard>
        </Grid>
        <Grid className={classes.cardMargin} xs={12} md={5} item>
          <BasicStatsCard
            fadeTimeOut={0}
            data={props.basicStats.avgComments}
            loaded={props.dataLoaded}
            name="Avg. Comments"
            iconColor="#5851DB"
            icon={<CommentIcon className={classes.iconSize}></CommentIcon>}
          ></BasicStatsCard>
        </Grid>
        <Grid className={classes.cardMargin} xs={12} md={5} item>
          <BasicStatsCard
            fadeTimeOut={0}
            data={props.basicStats.avgEngagementRate + "%"}
            loaded={props.dataLoaded}
            name="Avg. Engagement Rate"
            iconColor="#FD1D1D"
            icon={
              <SmartphoneIcon className={classes.iconSize}></SmartphoneIcon>
            }
          ></BasicStatsCard>
        </Grid>
        <Grid className={classes.cardMargin} xs={12} md={5} item>
          <BasicStatsCard
            fadeTimeOut={0}
            loaded={props.dataLoaded}
            data={
              numeral(props.basicStats.minPrice).format("$0,0.00") +
              " - " +
              numeral(props.basicStats.maxPrice).format("$0,0.00")
            }
            name="Avg. Price Range Per Ad"
            iconColor="#85bb65"
            icon={
              <AttachMoneyIcon className={classes.iconSize}></AttachMoneyIcon>
            }
          ></BasicStatsCard>
        </Grid>
      </Grid>
      <Grid
        className={clsx(classes.textDirection, classes.flex)}
        container
        spacing={0}
        direction="row"
      >
        <CarouselWrapper></CarouselWrapper>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  tab: state.userDetails.tab,
  basicStats: state.userDetails.basicStats,
  dataLoaded: state.userDetails.dataLoaded,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(BasicTab);
