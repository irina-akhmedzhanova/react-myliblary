import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from '@material-ui/core';

const AuthDialog = ({
  open,
  dialogClose,
  id,
  ...props
}) => {
  return (
    <Dialog
      open={open}
      onClose={dialogClose}
      id={id}>
      <DialogTitle id="form-dialog-login">Log In</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Email"
          type="email"
          fullWidth />
        <TextField
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth />
      </DialogContent>
      <DialogActions>
        {props.children}
      </DialogActions>
    </Dialog>
  )
};

export { AuthDialog };