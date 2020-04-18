import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { red, green, yellow } from "@material-ui/core/colors";
import clsx from "clsx";
import { RootState } from "../../../redux/reducer";
import format from "date-fns/format";

type Props = ConnectedProps<typeof connector>;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    RedBg: {
      background: red[500],
    },
    RedColor: {
      color: red[500],
    },
    GreenColor: {
      color: green[500],
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    GreenBg: {
      background: green[500],
    },
    YellowColor: {
      color: yellow[500],
    },
    circle: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
    },
    borderRight: {
      borderRight: "1px solid grey",
    },
    spacingLeft: {
      marginLeft: "3px",
    },
    spacingRight: {
      marginRight: "3px",
    },
  })
);

function Status({ status }: Props) {
  const classes = useStyles();
  const _renderSize = (bytes: number, si: boolean) => {
    var thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    var units = si
      ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    var u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + " " + units[u];
  };
  return (
    <Grid container alignContent="center" justify="center" spacing={1}>
      <Grid
        item
        xs={5}
        md={2}
        className={clsx(classes.borderRight, classes.flex)}
      >
        <div
          className={clsx(
            classes.circle,
            classes.spacingRight,
            status.status === "online" ? classes.GreenBg : classes.RedBg
          )}
        ></div>
        <Typography variant="body2">{status.status}</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        md={2}
        className={clsx(classes.borderRight, classes.flex)}
      >
        <Typography className={classes.spacingRight} variant="body2">
          {_renderSize(status.monit.memory, true)} Memory Usage
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        md={2}
        className={clsx(classes.borderRight, classes.flex)}
      >
        <Typography variant="body2">
          {status.monit.cpu * 100}% CPU Usage
        </Typography>
        <CircularProgress
          className={
            status.monit.cpu > 0.75
              ? classes.RedColor
              : status.monit.cpu > 0.5
              ? classes.YellowColor
              : classes.GreenColor
          }
          variant="static"
          value={status.monit.cpu * 100}
        />
      </Grid>
      <Grid
        item
        xs={5}
        md={2}
        className={clsx(classes.flex, classes.borderRight)}
      >
        <Typography className={classes.spacingRight} variant="body2">
          {status.env.instances}{" "}
          {status.env.instances > 1 ? "instances are " : "instance is "} running
        </Typography>
      </Grid>
      <Grid item xs={12} md={2} className={clsx(classes.flex)}>
        <Typography variant="body2">
          Bot is running since {format(new Date(status.env.uptime), "HH:mm:ss")}
        </Typography>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: RootState) => ({
  status: state.admin.status,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Status);
