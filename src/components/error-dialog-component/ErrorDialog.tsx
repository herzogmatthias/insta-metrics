import * as React from "react";
import {
  Dialog,
  DialogTitle,
  SnackbarContent,
  Button,
  Snackbar,
  Backdrop,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import Alert from "@material-ui/lab/Alert";
import Axios from "axios";

export interface IProps {
  hasError: boolean;
  getBasicInformation(): void;
  restart(): void;
}

const useStyles = makeStyles((theme) => ({
  errorColor: {
    backgroundColor: red[500],
  },
  whiteText: {
    color: "white",
  },
}));

export default function ErrorDialog(props: IProps) {
  const classes = useStyles();
  const _buttonClicked = async () => {
    props.restart();
    await Axios.delete("https://api.heroku.com/apps/insta-metrics/dynos");
    setTimeout(() => {
      props.getBasicInformation();
    }, 1000);
  };
  return (
    <Snackbar
      open={props.hasError}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Alert
        variant="filled"
        severity="error"
        action={
          <Button
            onClick={_buttonClicked}
            className={classes.whiteText}
            variant="text"
          >
            Restart
          </Button>
        }
      >
        {" "}
        Server responded with Status 500!
      </Alert>
    </Snackbar>
  );
}
