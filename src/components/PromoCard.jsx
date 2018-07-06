import React from 'react';
import styled from 'styled-components';
// import components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
  .media {
    height: 0;
    /* padding-top = 16:9 ratio */
    padding-top: 56.26%;
  }
`;

const PromoCard = ({ title, description, image }) => (
  <StyledCard className="card">
    <CardMedia className="media" image={image} title="Contemplative Reptile" />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </StyledCard>
);

export default PromoCard;
