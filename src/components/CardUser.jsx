import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

function CardUser(props) {
  return (
    <Card>
      <CardContent>
        <CardMedia component="img" image={props.src}></CardMedia>
        <Typography component="p">
          `${props.first_name} ${props.last_name}`
        </Typography>
        <CardActions>
          <Button size="small" color="primary">
            Ver mas
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardUser;
