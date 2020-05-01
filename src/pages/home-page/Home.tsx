import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { HomeState, ADD_TODO } from "../../redux/types/homeTypes";
import { RootState } from "../../redux/reducer";
import DoubleNavigation from "../../components/double-navigation-component/DoubleNavigation";
import NewUser from "../../components/new-user-component/NewUser";
import { Switch, RouteComponentProps, Route } from "react-router-dom";
import { ProtectedRoute } from "../../router/Router";
import UserDetails from "../../components/user-details-component/UserDetails";
import {
  CssBaseline,
  CircularProgress,
  makeStyles,
  Portal,
} from "@material-ui/core";
import { selectUser } from "../../redux/actions/sidebarActions";
import { changeTab } from "../../redux/actions/userDetailsAction";
import { tabRoutes } from "../../components/user-details-component/tabRoutes";

type Props = ConnectedProps<typeof connector> & RouteComponentProps<void>;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
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
  React.useEffect(() => {
    let perf = performance
      .getEntriesByType("navigation")
      .find((v) => (v as PerformanceNavigationTiming).type === "reload") as
      | PerformanceNavigationTiming
      | undefined;
    console.log(perf);
    if (perf && perf!.type === "reload") {
      const e = props.location.state as any;
      console.log(e);
      if (e && e.username) {
        props.selectUser(e.username);
      }
      if (e && e.tab != undefined) {
        console.log(e.tab);
        props.changeTab(e.tab);
      }
      props.history.push({
        pathname: props.match.url + "/" + e.username + "/" + tabRoutes[e.tab],
        state: { tab: e.tab, username: e.username },
      });
    } else {
      if (props.selectedUser) {
        props.history.push({
          pathname: props.match.url + "/" + props.selectedUser!.username,
          state: { tab: 0, username: props.selectedUser?.username },
        });
      }
    }
  }, []);
  window.onpopstate = (e: PopStateEvent) => {
    if (e.state.state.username) {
      props.selectUser(e.state.state.username);
    }
    if (e.state.state.tab != undefined) {
      console.log(e.state.state.tab);
      props.changeTab(e.state.state.tab);
    }
  };
  const _renderDetails = () => {
    if (props.loaded) {
      return (
        <Route
          path={`${props.match.url}/${props.selectedUser?.username}`}
          component={UserDetails}
        ></Route>
      );
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
    </div>
  );
}
const mapState = (state: RootState) => {
  return {
    loaded: state.sidebar.loaded,
    users: state.sidebar.users,
    selectedUser: state.sidebar.selectedUser,
  };
};
const mapDispatch = {
  addTodos: (increment: number) => ({ type: ADD_TODO, payload: increment }),
  changeTab: (t: number) => changeTab(t),
  selectUser: (username: string) => selectUser(username),
};

const connector = connect(mapState, mapDispatch);

export default connector(Home);
