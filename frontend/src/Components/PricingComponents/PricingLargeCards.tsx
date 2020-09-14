import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  ListItemIcon,
  Switch,
  FormControlLabel,
  Paper
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';

import { ICardSmallLarge, ICardSLData } from './types'

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
    color: '#2196f3',
  }
});

const PricingLargeCards = ({ data }: ICardSmallLarge) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  const classes = useStyles();

  const LargeCard: React.FC<any> = ({ card }: { card: ICardSLData }) => {

    return (
      <div >
        <Card className={classes.card}>
          <CardContent className={classes.cardHeader}>
            <div className={classes.cardPrice}>
              $<Typography variant="h2" gutterBottom className={classes.cardPriceTxt}>
                {card.price}
              </Typography>/mo
            </div>
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

          </CardContent>
          <CardActions className={classes.cardBtn}>
            <Button variant="contained" color="primary">SIGN IN</Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  return (
    <Paper elevation={0} className={classes.root}>
      <span className={classes.headerTxt} >
        Lorem ipsum dolor sit amet.
      </span>

      <Typography variant="caption" display="block" gutterBottom>
        Voluptas aut quae explicabo ut ipsum ipsam perferendis laboriosam
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={checked ? 'Monthly' : 'Annually'}
      />
      <div className={classes.cardsWrapper}>
        {data.map((card: ICardSLData) => <LargeCard card={card} />)}
      </div>
    </Paper>
  );
}

export default PricingLargeCards