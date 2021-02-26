import { makeStyles } from '@material-ui/core/styles';

const useStylesSearch = makeStyles((theme) => ({
  back: {
    backgroundColor: "#e9e9e9"
  },
  searchContent: {
    paddingTop: theme.spacing(12),
    minHeight: "90vh"
  },
  root: {
    width: "100%",
    position: 'relative',
    backgroundColor: "#fff",
    padding: theme.spacing(4)
  },
  searchBtn: {
    margin: theme.spacing(4),
    display: "flex",
    justifyContent: "center"
  }
}));

export { useStylesSearch };