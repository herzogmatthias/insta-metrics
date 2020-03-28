import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";
import { RootState } from "../../redux/reducer";
import { bindActionCreators } from "redux";
import {
  changeUsernameInput,
  closeNewUserModal,
  addUser
} from "../../redux/actions/newUserAction";

type Props = ConnectedProps<typeof connector>;

export function NewUser(props: Props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.closeModal}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add a new User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the username of an Instagram account to add he or she to your
          watchlist.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="username"
          fullWidth
          error={props.hasError}
          helperText={props.error}
          value={props.username}
          onChange={e => props.onChangeUsername(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeModal} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => props.addUserWithUsername(props.username)}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state: RootState) => ({
  open: state.newUser.open,
  username: state.newUser.username,
  error: state.newUser.error,
  hasError: state.newUser.hasError
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      closeModal: closeNewUserModal,
      onChangeUsername: (t: string) => changeUsernameInput(t),
      addUserWithUsername: (username: string) => addUser(username)
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(NewUser);
