import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  makeStyles,
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import BuildIcon from "@material-ui/icons/Build";
import { RootState } from "../../redux/reducer";
import { bindActionCreators } from "@reduxjs/toolkit";
import { changeTab } from "../../redux/actions/userDetailsAction";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BasicTab from "./basicStatsTab/BasicTab";
import AdvancedStatsTab from "./advancedStatsTab/AdvancedStatsTab";
import AdminTab from "./adminTab/AdminTab";
import { RouteComponentProps, Route } from "react-router-dom";
import { tabRoutes } from "./tabRoutes";
import { selectUser } from "../../redux/actions/sidebarActions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box paddingTop={3}>{children}</Box>}
    </Typography>
  );
}

type Props = ConnectedProps<typeof connector> & RouteComponentProps<void>;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  firstTabColor: {
    color: "#FCAF45 !important",
  },
  secondTabColor: {
    color: "#F56040 !important",
  },
  thirdTabColor: {
    color: "#C13584 !important",
  },
}));

function UserDetails(props: Props) {
  const classes = useStyles();
  useEffect(() => {
    let perf = performance
      .getEntriesByType("navigation")
      .find(
        (v) => (v as PerformanceNavigationTiming).type === "reload"
      ) as PerformanceNavigationTiming;

    if (!perf || perf.type !== "reload") {
      props.history.push({
        pathname: props.match.url + "/" + tabRoutes[props.tab],
        state: { tab: props.tab, username: props.selectedUser?.username },
      });
    }
  }, []);
  const matches = useMediaQuery("(max-width: 600px)");
  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <Tabs
          value={props.tab}
          onChange={(ev: React.ChangeEvent<{}>, value: number) => {
            props.onTabChange(value);
            props.history.push({
              pathname: props.match.url + "/" + tabRoutes[value],
              state: { tab: value, username: props.selectedUser?.username },
            });
          }}
          textColor="primary"
          TabIndicatorProps={{ hidden: true }}
          centered={!matches}
          variant={matches ? "fullWidth" : "standard"}
        >
          <Tab
            classes={{
              selected: classes.firstTabColor,
            }}
            label="Basic"
            icon={<InfoIcon></InfoIcon>}
          />
          <Tab
            classes={{
              selected: classes.secondTabColor,
            }}
            label="Advanced"
            icon={<ShowChartIcon></ShowChartIcon>}
          />
          <Tab
            classes={{
              selected: classes.thirdTabColor,
            }}
            label="Admin Settings"
            icon={<BuildIcon></BuildIcon>}
          />
        </Tabs>
      </Paper>
      <TabPanel value={props.tab} index={0}>
        <Route path={props.match.url + "/basic"} component={BasicTab}></Route>
      </TabPanel>
      <TabPanel value={props.tab} index={1}>
        <Route
          path={props.match.url + "/advanced"}
          component={AdvancedStatsTab}
        ></Route>
      </TabPanel>
      <TabPanel value={props.tab} index={2}>
        <Route path={props.match.url + "/admin"} component={AdminTab}></Route>
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  tab: state.userDetails.tab,
  selectedUser: state.sidebar.selectedUser,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onTabChange: (t: number) => changeTab(t),
      selectUser: (username: string) => selectUser(username),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserDetails);
