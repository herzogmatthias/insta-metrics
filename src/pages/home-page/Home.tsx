import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { HomeState, ADD_TODO } from "../../redux/types/homeTypes";
import { RootState } from "../../redux/reducer";
import DoubleNavigation from "../../components/double-navigation-component/DoubleNavigation";
import NewUser from "../../components/new-user-component/NewUser";
import { Switch, RouteComponentProps } from "react-router-dom";
import { ProtectedRoute } from "../../router/Router";
import UserDetails from "../../components/user-details-component/UserDetails";
import { CssBaseline, CircularProgress, makeStyles } from "@material-ui/core";

type Props = ConnectedProps<typeof connector> & RouteComponentProps<void>;

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(9)
  },
  root: {
    display: "flex"
  }
}));

function Home(props: Props) {
  const classes = useStyles();
  const _renderDetails = () => {
    if (props.loaded) {
      return <UserDetails></UserDetails>;
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
  return { loaded: state.sidebar.loaded, users: state.sidebar.users };
};
const mapDispatch = {
  addTodos: (increment: number) => ({ type: ADD_TODO, payload: increment })
};

const connector = connect(mapState, mapDispatch);

export default connector(Home);
