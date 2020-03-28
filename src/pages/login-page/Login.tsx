import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { RootState } from "../../redux/reducer/index";
import { connect, ConnectedProps } from "react-redux";
import { onPasswordChange, login } from "../../redux/actions/loginAction";
import { bindActionCreators } from "redux";
import { RouteComponentProps } from "react-router-dom";

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ILoginProps extends RouteComponentProps<void> {}

type Props = PropsFromRedux & ILoginProps;

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Login(props: Props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.submitPassword(props.password, props.history);
          }}
          className={classes.form}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            onChange={e => props.onChangePassword(e.target.value)}
            value={props.password}
            error={props.hasError}
            helperText={props.error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
const mapState = (state: RootState) => ({
  password: state.login.password,
  error: state.login.error,
  hasError: state.login.hasError
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onChangePassword: (t: string) => onPasswordChange(t),
      submitPassword: (password: string, history) => login(password, history)
    },
    dispatch
  );

const connector = connect(mapState, mapDispatchToProps);
export default connector(Login);
