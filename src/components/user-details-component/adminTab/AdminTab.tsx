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
  IconButton,
} from "@material-ui/core";
import Status from "./Status";
import Setting from "./Setting";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { Logs } from "./Logs";
import { red, green, orange } from "@material-ui/core/colors";
import { DirectMessages } from "./DirectMessages";
import CachedIcon from "@material-ui/icons/Cached";
import { useEffect, useState } from "react";
import {
  getAllNames,
  fetchStatusJob,
  restoreOrginalSubreddits,
  restoreOriginalSchedule,
  onChangeSchedule,
  onChangeSubreddits,
  postNewSubreddits,
  postNewSchedule,
  reloadLogsJob,
  reloadDMsJob,
  deleteBot,
  restartBot,
  stopBot,
} from "../../../redux/actions/adminActions";

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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  useEffect(() => {
    const id = setInterval(() => {
      props.statusUpdateJob(props.selectedUser!.username);
    }, 60000);
    setIntervalId(id);
    return function cleanup() {
      clearInterval(intervalId!);
    };
  }, []);
  useEffect(() => {
    async function init() {
      props.getAllBots(props.selectedUser!.username);
    }
    init();
  }, [props.selectedUser]);
  return (
    <div>
      <div className={classes.spacing}>
        <Typography align="center" variant="h3">
          Admin Center
        </Typography>
      </div>
      <Status loaded={props.statusLoaded} status={props.status}></Status>
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
          onChangeValue={props.onChangeSchedule}
          restoreOriginalValue={props.restoreOriginalSchedule}
          originalValue={props.originalSchedule}
          name={props.pm2Name}
        >
          Schedule
        </Setting>
        <Setting
          loaded={props.settingsLoaded}
          canBeModified
          value={props.subreddits.join(",")}
          restoreOriginalValue={props.restoreOriginalSubreddits}
          onChangeValue={props.onChangeSubreddits}
          originalValue={props.originalSubreddits.join(",")}
          saveChanges={props.newSubreddits}
          name={props.pm2Name}
        >
          Subreddits
        </Setting>

        <Box padding={2}>
          <Button
            onClick={() => props.deleteBot(props.pm2Name)}
            className={classes.red}
            variant="outlined"
          >
            Delete
          </Button>
        </Box>
        <Box padding={2}>
          <Button
            onClick={() => props.stopBot(props.pm2Name)}
            className={classes.orange}
            variant="outlined"
          >
            Stop
          </Button>
        </Box>
        <Box padding={2}>
          <Button
            onClick={() => props.restartBot(props.pm2Name)}
            className={classes.green}
            variant="contained"
          >
            Restart
          </Button>
        </Box>
      </Grid>
      <div className={classes.spacingTop}>
        <DirectMessages
          reloadDms={props.reloadDms}
          username={props.selectedUser!.username}
          loaded={props.dmsLoaded}
          dms={props.dms}
        ></DirectMessages>
      </div>

      <div className={classes.spacingTop}>
        <Typography align="left" variant="h5">
          Logs{" "}
          <IconButton
            onClick={() => props.reloadLogs(props.selectedUser!.username)}
            edge="end"
          >
            <CachedIcon></CachedIcon>
          </IconButton>
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
  pm2Name: state.admin.pm2Name,
  logs: state.admin.logs,
  status: state.admin.status,
  statusLoaded: state.admin.statusLoaded,
  dms: state.admin.dms,
  explore: state.admin.explore,
  hashtags: state.admin.hashtags,
  logsLoaded: state.admin.logsLoaded,
  dmsLoaded: state.admin.dmsLoaded,
  settingsLoaded: state.admin.settingsLoaded,
  selectedUser: state.sidebar.selectedUser,
  originalSubreddits: state.admin.originalSubreddits,
  originalSchedule: state.admin.originalSchedule,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getAllBots: getAllNames,
      statusUpdateJob: fetchStatusJob,
      restoreOriginalSubreddits: restoreOrginalSubreddits,
      restoreOriginalSchedule: restoreOriginalSchedule,
      onChangeSchedule: onChangeSchedule,
      onChangeSubreddits: onChangeSubreddits,
      newSubreddits: postNewSubreddits,
      newSchedule: postNewSchedule,
      reloadLogs: reloadLogsJob,
      reloadDms: reloadDMsJob,
      restartBot: restartBot,
      deleteBot: deleteBot,
      stopBot: stopBot,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AdminTab);
