import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "200px",
    marginBottom: "16px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "16px",
    },
  },
  cardText: {
    marginTop: "16px",
  },
  cardActions: {
    padding: "16px 0",
  },
}));
function CardUser(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  var text = `${props.first_name} ${props.last_name}`;
  return (
    <Card className={classes.card} elevation={8}>
      <CardContent>
        <CardMedia component="img" image={props.src}></CardMedia>
        <Typography component="p" className={classes.cardText}>
          {text}
        </Typography>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" variant="contained">
            Ver mas
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardUser;
