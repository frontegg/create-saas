import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  ListItemIcon
} from '@material-ui/core';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import TimelineIcon from '@material-ui/icons/Timeline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import CheckIcon from '@material-ui/icons/Check';

import { ICardSmallLarge, ICardSLData } from './types'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marging: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerTxt: {
    fontSize: '1.2rem'
  },
  card: {
    minWidth: 275,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    textAlign: 'center'
  },
  cardTxt: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  cardPrice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    fontSize: '1rem',
    color: 'rgba(158,158,158)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardBtn: {
    alignSelf: 'center'
  },
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
  },
  cardNameTxt: {
    textTransform: 'uppercase'
  },
  cardPriceTxt: {
    fontWeight: 400,
    color: '#3f51b5',
  }
});



const PricingSmallCards = ({ data }: ICardSmallLarge) => {
  const classes = useStyles();

  const CardsHeaderIcons = ({ name }: { name: string }) => {
    switch (name) {
      case 'basic':
        return <TimelineIcon color="primary" style={{ fontSize: 60 }} />
      case 'plus':
        return <EqualizerIcon color="primary" style={{ fontSize: 60 }} />
      case 'pro':
        return <GroupOutlinedIcon color="primary" style={{ fontSize: 60 }} />
      case 'premium':
        return <WorkOutlineIcon color="primary" style={{ fontSize: 60 }} />
      default:
        return <TimelineIcon color="primary" style={{ fontSize: 60 }} />
    }
  }

  const SmallCard = ({ card }: { card: ICardSLData }) => {

    return (
      <div >
        <Card className={classes.card}>
          <CardContent className={classes.cardHeader}>
            <ListItemIcon>
              <CardsHeaderIcons name={card.name} />
            </ListItemIcon>
            <Typography variant="h6" gutterBottom className={classes.cardNameTxt}>
              {card.name}
            </Typography>
          </CardContent>
          <CardContent>
            {card.descs.map((desc: any) =>
              <div className={classes.cardTxt}>
                <ListItemIcon>
                  <CheckIcon color={desc.approve ? "primary" : "secondary"} />
                </ListItemIcon>
                {desc.label}
              </div>)}
            <div className={classes.cardPrice}>
              $<Typography variant="h4" gutterBottom className={classes.cardPriceTxt}>
                {card.price}
              </Typography>/mo
            </div>
          </CardContent>
          <CardActions className={classes.cardBtn}>
            <Button variant="contained" color="primary">SIGN IN</Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <span className={classes.headerTxt} >
        Lorem ipsum dolor sit amet.
      </span>
      <Typography variant="caption" display="block" gutterBottom>
        Voluptas aut quae explicabo ut ipsum ipsam perferendis laboriosam
      </Typography>
      <div className={classes.cardsWrapper}>
        {data.map((card: ICardSLData) => <SmallCard card={card} />)}
      </div>
    </div>
  );
}

export default PricingSmallCards