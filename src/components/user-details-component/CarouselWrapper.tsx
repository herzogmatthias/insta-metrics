import React from "react";
import { Paper, Typography, makeStyles, IconButton } from "@material-ui/core";
import { RootState } from "../../redux/reducer";
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  carouselGoBack,
  carouselGoForward
} from "../../redux/actions/userDetailsAction";
import BasicStatsChart from "./BasicStatsChart";

type Props = ConnectedProps<typeof connector>;
const useStyles = makeStyles(theme => ({
  h3Responsive: {
    fontSize: "2rem",
    padding: "15px",
    "@media (max-width:600px)": {
      fontSize: "1.5rem"
    }
  },
  cardMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
    width: "100%",
    "@media (max-width:960px)": {
      marginLeft: 0,
      marginRight: 0
    }
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
}));

function CarouselWrapper(props: Props) {
  const classes = useStyles();
  return (
    <Paper className={classes.cardMargin} elevation={3}>
      <div className={classes.flex}>
        <IconButton onClick={props.goBack}>
          <ChevronLeftIcon fontSize="large"></ChevronLeftIcon>
        </IconButton>{" "}
        <Typography className={classes.h3Responsive} variant="h3">
          {props.carouselData[props.selected].header}
        </Typography>{" "}
        <IconButton onClick={props.goForward}>
          <ChevronRightIcon fontSize="large"></ChevronRightIcon>
        </IconButton>
      </div>
      <div>
        <BasicStatsChart
          type={props.carouselData[props.selected].header}
          data={props.carouselData[props.selected].chart}
        ></BasicStatsChart>
      </div>
    </Paper>
  );
}
const mapStateToProps = (state: RootState) => ({
  carouselData: state.userDetails.CarouselData,
  selected: state.userDetails.selectedChart
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      goBack: carouselGoBack,
      goForward: carouselGoForward
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(CarouselWrapper);
