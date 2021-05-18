import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography, useTheme, Slide, Dialog, DialogContent } from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  emailWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    "& span": {
      marginLeft: "16px",
    },
  },
}));
function CardUser(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const classes = useStyles(theme);
  var name = `${props.first_name} ${props.last_name}`;
  var email = "andrescalvo@gmail.com";
  return (
    <React.Fragment>
      <Card className={classes.card} elevation={8}>
        <CardContent>
          <CardMedia component="img" image={props.src}></CardMedia>
          <Typography component="p" className={classes.cardText}>
            {name}
          </Typography>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" variant="contained" onClick={handleClickOpen}>
              Ver mas
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <img src={props.src} alt="Imagen perfil"></img>
          <p>{name}</p>
          <div className={classes.emailWrapper}>
            <ContactMailIcon color="primary"></ContactMailIcon>
            <span>{email}</span>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default CardUser;
