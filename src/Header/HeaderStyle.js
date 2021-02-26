import { makeStyles } from '@material-ui/core/styles';

const useStylesHeader = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

export { useStylesHeader };