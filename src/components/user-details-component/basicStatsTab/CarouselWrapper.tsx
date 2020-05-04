import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import clsx from "clsx";
import BasicStatsChart from "./BasicStatsChart";
import { grey } from "@material-ui/core/colors";
import {
  changeChart,
  getGraphData,
} from "../../../redux/actions/userDetailsAction";

type Props = ConnectedProps<typeof connector>;
const useStyles = makeStyles((theme) => ({
  h3Responsive: {
    fontSize: "2rem",
    padding: "15px",
    "@media (max-width:600px)": {
      fontSize: "1.0rem",
    },
  },
  selected: {
    backgroundColor: grey[300],
  },
  cardMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
    width: "100%",
    "@media (max-width:960px)": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  header: {
    "&:after": {
      display: "block",
      content: "close-quote",
      backgroundSize: "100% 5px ",
      background:
        "linear-gradient(45deg,#FFDC80 0%,#FCAF45,#F77737,#F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6) left bottom #777 no-repeat",
      transform: "scaleX(0)",
      transition: "transform 500ms ease-in-out",
      paddingBottom: "3px",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  grow: {
    cursor: "pointer",
    flexGrow: 1,
  },
}));

function CarouselWrapper(props: Props) {
  const classes = useStyles();
  const media = useMediaQuery("(max-width: 400px)");
  useEffect(() => {
    async function init() {
      props.getGraphData(props.selectedUser!.username);
    }
    init();
  }, [props.selectedUser]);
  return (
    <Paper className={classes.cardMargin} elevation={media ? 0 : 3}>
      <div className={classes.flex}>
        {props.graphLoaded && props.carouselData ? (
          <>
            {props.carouselData.map((val, ind) => {
              return (
                <div
                  key={ind}
                  onClick={() => props.changeChart(ind)}
                  className={classes.grow}
                >
                  <Typography
                    className={clsx(
                      classes.h3Responsive,
                      classes.header,
                      ind === props.selected ? classes.selected : null
                    )}
                    variant="h3"
                  >
                    {val.header}
                  </Typography>
                </div>
              );
            })}{" "}
          </>
        ) : null}
      </div>
      <div>
        <BasicStatsChart
          type={props.carouselData[props.selected]?.header}
          data={props.carouselData[props.selected]?.chart}
          loaded={props.graphLoaded}
        ></BasicStatsChart>
      </div>
    </Paper>
  );
}
const mapStateToProps = (state: RootState) => ({
  carouselData: state.userDetails.carouselData,
  selected: state.userDetails.selectedChart,
  graphLoaded: state.userDetails.graphLoaded,
  selectedUser: state.sidebar.selectedUser,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      changeChart: (index: number) => changeChart(index),
      getGraphData: (username: string) => getGraphData(username),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(CarouselWrapper);
