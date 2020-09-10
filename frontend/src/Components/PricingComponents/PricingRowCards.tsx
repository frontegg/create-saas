import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  Paper
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';

import { ICardRow, ICardRowData, TDesc, TCard } from './types'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerTxt: {
    fontSize: '1.2rem'
  },
  card: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardHeader: {
    textAlign: 'center'
  },
  cardTxt: {
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
    justifyContent: 'space-between',
    width: '100%'
  },
  txtWrapper: {
    paddingTop: '11rem',
    fontSize: '1rem'
  },
  cardNameTxt: {
    textTransform: 'capitalize'
  },
  cardPriceTxt: {
    fontWeight: 400,
    color: '#2196f3',
  }
});

const PricingRowCards = ({ data }: ICardRow) => {
  const classes = useStyles();

  const RowCard = () =>
    <>
      {data.cards.map((el: TCard) =>
        <Card key={el.name} className={classes.card}>
          <CardContent className={classes.cardHeader}>
            <Typography variant="h6" gutterBottom className={classes.cardNameTxt}>
              {el.name}
            </Typography>
            <div className={classes.cardPrice}>
              $<Typography variant="h2" className={classes.cardPriceTxt}>
                {el.price}
              </Typography>/mo
          </div>
          </CardContent>
          <CardContent>
            {data.descs.map((desc: TDesc, i: number) =>
              <div key={i} className={classes.cardTxt}>
                <CheckIcon color={desc.approve ? "primary" : "secondary"} />
              </div>)}
          </CardContent>
          <CardActions className={classes.cardBtn}>
            <Button variant="contained" color="primary">SIGN IN</Button>
          </CardActions>
        </Card>)}
    </>


  return (
    <Paper elevation={0} className={classes.root}>
      <span className={classes.headerTxt} >
        Lorem ipsum dolor sit amet.
      </span>
      <Typography variant="caption" display="block" gutterBottom>
        Voluptas aut quae explicabo ut ipsum ipsam perferendis laboriosam
      </Typography>
      <div className={classes.cardsWrapper}>
        <div className={classes.txtWrapper}>
          {data.descs.map((el: TDesc) => <div className={classes.cardTxt}>{el.label}</div>)}
        </div>
        <RowCard />
      </div>
    </Paper>
  );
}

export default PricingRowCards