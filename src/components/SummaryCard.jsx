import React from 'react';
import PropTypes from 'prop-types';
// import material ui components
import eventIcon from '../assets/baseline-event-24px.svg';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Event from '@material-ui/icons/Event';

const styles = {
  card: {
    maxWidth: 320
  },
  media: {
    backgroundSize: 'contain',
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};

function SummaryCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={eventIcon}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Event
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia reprehenderit voluptatibus ullam unde optio quaerat eaque quasi
            placeat quam?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SummaryCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SummaryCard);
