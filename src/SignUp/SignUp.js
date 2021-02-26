import {
  Container,
  TextField,
  DialogActions,
  Typography
} from '@material-ui/core';

const SignUp = ({
  open,
  dialogClose,
  id,
  ...props
}) => {
  return (
    <main>

   
    <Container>
      <Typography id="form-dialog-signup">Create your account</Typography>
        <TextField
          margin="dense"
          id="username"
          label="Username"
          type="text"
          fullWidth />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth />
        <TextField
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth />
      <DialogActions>
        {props.children}
      </DialogActions>
      </Container>
      </main>
  )
};

export { SignUp };