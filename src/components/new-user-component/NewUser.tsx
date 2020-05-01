import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { RootState } from "../../redux/reducer";
import { bindActionCreators } from "redux";
import {
  changeUsernameInput,
  closeNewUserModal,
  addUser,
  handleCheck,
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
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="username"
            fullWidth
            error={props.hasError}
            helperText={props.error}
            value={props.username}
            onChange={(e) => props.onChangeUsername(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.isBot}
                onChange={(ev, checked) => props.handleCheck(checked)}
                name="checkedB"
                color="primary"
              />
            }
            label="Is Bot Account"
          />
        </div>

        {props.checkingUser ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress></CircularProgress>
            <Typography
              style={{ padding: "8px" }}
              variant="subtitle1"
              align="center"
            >
              {" "}
              Checking User...
            </Typography>
          </Box>
        ) : null}
      </DialogContent>

      <DialogActions>
        <Button onClick={props.closeModal} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => props.addUserWithUsername(props.username, props.isBot)}
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
  hasError: state.newUser.hasError,
  isBot: state.newUser.isBot,
  checkingUser: state.newUser.checkingUser,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      closeModal: closeNewUserModal,
      onChangeUsername: (t: string) => changeUsernameInput(t),
      handleCheck: (t: boolean) => handleCheck(t),
      addUserWithUsername: (username: string, isBot: boolean) =>
        addUser(username, isBot),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(NewUser);
