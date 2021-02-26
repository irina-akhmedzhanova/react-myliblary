import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@material-ui/core';
import { useStyles } from './CardStyles';


const CardMini = ({
  title,
  author,
  image
}) => {
  const classes = useStyles();
  const shotTitle = title.length <= 30 ? title : (title.substr(0, 30) + '...')

  return (
  <Card className={classes.card}>
    <CardMedia
      className={classes.cardMedia}
      image={image}
      title={title}
    />
    <CardContent className={classes.cardContent}>
      <Typography variant="body1" gutterBottom={true}>
        {author}
      </Typography>
      <Typography variant="h5" gutterBottom={true}>
        {shotTitle}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        View
      </Button>
    </CardActions>
  </Card>
  )
};

export { CardMini };