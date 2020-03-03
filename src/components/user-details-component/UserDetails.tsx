import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  makeStyles,
  Paper,
  Tabs,
  Tab,
  Typography,
  Box
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import BuildIcon from "@material-ui/icons/Build";
import { RootState } from "../../redux/reducer";
import { bindActionCreators } from "@reduxjs/toolkit";
import { changeTab } from "../../redux/actions/userDetailsAction";
import BasicTab from "./BasicTab";

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
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  firstTabColor: {
    color: "#FCAF45 !important"
  },
  secondTabColor: {
    color: "#F56040 !important"
  },
  thirdTabColor: {
    color: "#C13584 !important"
  }
}));

function UserDetails(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <Tabs
          value={props.tab}
          onChange={(ev: React.ChangeEvent<{}>, value: number) =>
            props.onTabChange(value)
          }
          textColor="primary"
          indicatorColor="secondary"
          centered
        >
          <Tab
            classes={{
              selected: classes.firstTabColor
            }}
            label="Basic"
            icon={<InfoIcon></InfoIcon>}
          />
          <Tab
            classes={{
              selected: classes.secondTabColor
            }}
            label="Advanced"
            icon={<ShowChartIcon></ShowChartIcon>}
          />
          <Tab
            classes={{
              selected: classes.thirdTabColor
            }}
            label="Admin Settings"
            icon={<BuildIcon></BuildIcon>}
          />
        </Tabs>
      </Paper>
      <TabPanel value={props.tab} index={0}>
        <BasicTab></BasicTab>
      </TabPanel>
      <TabPanel value={props.tab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={props.tab} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  tab: state.userDetails.tab
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onTabChange: (t: number) => changeTab(t)
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserDetails);
