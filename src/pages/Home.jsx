import { Container, makeStyles, Paper, useTheme } from "@material-ui/core";
import CardUser from "../components/CardUser";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "20px",
  },
  paper: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    flexFlow: "column wrap",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-start",
      "& div:nth-child(2n)": {
        marginLeft: "auto",
      },
    },
  },
}));
function Home() {
  const themes = useTheme();
  const classes = useStyles(themes);
  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Paper elevation={4} className={classes.paper}>
        <CardUser
          first_name="andres"
          last_name="calvo"
          src={"https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        ></CardUser>
        <CardUser
          first_name="andres"
          last_name="calvo"
          src={"https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        ></CardUser>
        <CardUser
          first_name="andres"
          last_name="calvo"
          src={"https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        ></CardUser>
      </Paper>
    </Container>
  );
}

export default Home;
