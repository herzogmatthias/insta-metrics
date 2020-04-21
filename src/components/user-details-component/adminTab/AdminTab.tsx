import * as React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Divider,
  Button,
  Box,
} from "@material-ui/core";
import Status from "./Status";
import Setting from "./Setting";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { Logs } from "./Logs";
import { red, yellow, green, orange } from "@material-ui/core/colors";
import { DirectMessages } from "./DirectMessages";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    spacing: {
      padding: theme.spacing(2),
    },
    spacingTop: {
      paddingTop: theme.spacing(4),
    },
    notModifyFlex: {
      display: "flex",
      alignItems: "center",
    },
    red: {
      color: red[500],
      border: `1px solid ${red[500]}`,
    },
    orange: {
      color: orange[500],
      border: `1px solid ${orange[500]}`,
    },
    green: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
  })
);

function AdminTab(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.spacing}>
        <Typography align="center" variant="h3">
          Admin Center
        </Typography>
      </div>
      <Status></Status>
      <div className={classes.spacingTop}>
        <Typography align="left" variant="h5">
          Settings
        </Typography>
        <Divider></Divider>
      </div>
      <Grid container spacing={2} justify="flex-start" alignItems="center">
        <Setting loaded={props.settingsLoaded} value={props.name}>
          Name
        </Setting>
        <Setting loaded={props.settingsLoaded} value={props.hashtags.join(",")}>
          Hashtags
        </Setting>
        <Setting loaded={props.settingsLoaded} value={props.explore.toString()}>
          explore
        </Setting>
        <Setting
          loaded={props.settingsLoaded}
          canBeModified
          value={props.schedule}
        >
          Schedule
        </Setting>
        <Setting
          loaded={props.settingsLoaded}
          canBeModified
          value={props.subreddits.join(",")}
        >
          Subreddits
        </Setting>

        <Box padding={2}>
          <Button className={classes.red} variant="outlined">
            Delete
          </Button>
        </Box>
        <Box padding={2}>
          <Button className={classes.orange} variant="outlined">
            Stop
          </Button>
        </Box>
        <Box padding={2}>
          <Button className={classes.green} variant="contained">
            Restart
          </Button>
        </Box>
      </Grid>
      <div className={classes.spacingTop}>
        <DirectMessages
          loaded={props.dmsLoaded}
          dms={props.dms}
        ></DirectMessages>
      </div>

      <div className={classes.spacingTop}>
        <Typography align="left" variant="h5">
          Logs
        </Typography>
        <Divider></Divider>
      </div>
      <Logs loaded={props.logsLoaded} logs={props.logs}></Logs>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  schedule: state.admin.schedule,
  subreddits: state.admin.subreddits,
  name: state.admin.name,
  logs: state.admin.logs,
  dms: state.admin.dms,
  explore: state.admin.explore,
  hashtags: state.admin.hashtags,
  logsLoaded: state.admin.logsLoaded,
  dmsLoaded: state.admin.dmsLoaded,
  settingsLoaded: state.admin.settingsLoaded,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AdminTab);
