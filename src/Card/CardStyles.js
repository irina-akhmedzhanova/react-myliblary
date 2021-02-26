import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "200px"
  },
  cardMedia: {
    paddingTop: "70%",
    backgroundSize: "contain",
    marginTop: theme.spacing(2)
  },
  cardContent: {
    height: "80px",
  }
}));

export { useStyles };