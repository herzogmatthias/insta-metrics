import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { HomeState, ADD_TODO } from "../../redux/types/homeTypes";
import { RootState } from "../../redux/reducer";
import DoubleNavigation from "../../components/double-navigation-component/DoubleNavigation";
import NewUser from "../../components/new-user-component/NewUser";
import { Switch, RouteComponentProps } from "react-router-dom";
import { ProtectedRoute } from "../../router/Router";
import UserDetails from "../../components/user-details-component/UserDetails";
import { CssBaseline } from "@material-ui/core";

type Props = ConnectedProps<typeof connector> & RouteComponentProps<void>;

class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    return (
      <div>
        <CssBaseline />
        <DoubleNavigation {...this.props}></DoubleNavigation>
        <NewUser></NewUser>
        <main>
          <Switch>
            <ProtectedRoute
              path="dashboard
              /:name"
              component={UserDetails}
            ></ProtectedRoute>
          </Switch>
        </main>
      </div>
    );
  }
}
const mapState = (state: RootState) => {
  return { todos: state.home.todos, headline: state.home.headline };
};
const mapDispatch = {
  addTodos: (increment: number) => ({ type: ADD_TODO, payload: increment })
};

const connector = connect(mapState, mapDispatch);

export default connector(Home);
