import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducer";
import DoubleNavigation from "../../components/double-navigation-component/DoubleNavigation";
import NewUser from "../../components/new-user-component/NewUser";
import { RouteComponentProps } from "react-router-dom";
import { ProtectedRoute } from "../../router/Router";
import UserDetails from "../../components/user-details-component/UserDetails";
import { CssBaseline, CircularProgress, makeStyles } from "@material-ui/core";
import {
  selectUser,
  getBasicInformation,
} from "../../redux/actions/sidebarActions";
import { changeTab, restart } from "../../redux/actions/userDetailsAction";
import ErrorDialog from "../../components/error-dialog-component/ErrorDialog";

type Props = ConnectedProps<typeof connector> & RouteComponentProps<void>;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(9),
  },
  root: {
    display: "flex",
  },
}));

function Home(props: Props) {
  const classes = useStyles();
  const _getBasicInformation = () => {
    props.getBasicInformation(props.match, props.history, props.location);
  };
  React.useEffect(() => {}, []);
  window.onpopstate = (e: PopStateEvent) => {
    if (e.state.state.username) {
      props.selectUser(e.state.state.username);
    }
    if (e.state.state.tab !== undefined) {
      props.changeTab(e.state.state.tab);
    }
  };
  const _renderDetails = () => {
    if (props.loaded && !props.hasError) {
      return (
        <ProtectedRoute
          path={`${props.match.url}/${props.selectedUser?.username}`}
          component={UserDetails}
        ></ProtectedRoute>
      );
    } else if (props.hasError && !props.loaded) {
      return null;
    } else {
      return <CircularProgress />;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DoubleNavigation {...props}></DoubleNavigation>
      <NewUser></NewUser>
      <main className={classes.content}>
        <div className={classes.toolbar}>{_renderDetails()}</div>
      </main>
      {props.hasError ? (
        <ErrorDialog
          restart={props.restart}
          getBasicInformation={_getBasicInformation}
          hasError={props.hasError}
        ></ErrorDialog>
      ) : null}
    </div>
  );
}
const mapState = (state: RootState) => {
  return {
    loaded: state.sidebar.loaded,
    users: state.sidebar.users,
    hasError: state.userDetails.hasError,
    selectedUser: state.sidebar.selectedUser,
  };
};
const mapDispatch = {
  changeTab: (t: number) => changeTab(t),
  selectUser: (username: string) => selectUser(username),
  getBasicInformation: (match: any, history: any, location: any) =>
    getBasicInformation(match, history, location),
  restart: () => restart(),
};

const connector = connect(mapState, mapDispatch);

export default connector(Home);
