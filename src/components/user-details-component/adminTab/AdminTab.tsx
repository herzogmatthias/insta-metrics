import * as React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Divider,
} from "@material-ui/core";
import Status from "./Status";
import Setting from "./Setting";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { Logs } from "./Logs";

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
        <Setting type="Name" value={props.name}></Setting>
        <Setting canBeModified type="Schedule" value={props.schedule}></Setting>
        <Setting type="Subreddits" value={props.subreddits.join(",")}></Setting>
      </Grid>
      <div className={classes.spacingTop}>
        <Typography align="left" variant="h5">
          Logs
        </Typography>
        <Divider></Divider>
      </div>
      <Logs logs={props.logs}></Logs>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  schedule: state.admin.schedule,
  subreddits: state.admin.subreddits,
  name: state.admin.name,
  logs: state.admin.logs,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AdminTab);
