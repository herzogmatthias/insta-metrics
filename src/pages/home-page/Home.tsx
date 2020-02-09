import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { HomeState, ADD_TODO } from "../../redux/types/homeTypes";
import { RootState } from "../../redux/reducer";
import DoubleNavigation from "../../components/sidebar-component/DoubleNavigation";
import NewUser from "../../components/new-user-component/NewUser";

type Props = ConnectedProps<typeof connector>;

class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    return (
      <div>
        <DoubleNavigation></DoubleNavigation>
        <NewUser></NewUser>
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
