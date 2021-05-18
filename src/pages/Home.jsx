import { Container, Box, makeStyles, Paper, useTheme } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import CardUser from "../components/CardUser";
import axios from "axios";
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "20px",
  },
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
  },
  usersWrapper: {
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
  pagination: {
    alignSelf: "center",
    marginBottom: "16px",
  },
}));
function Home() {
  const themes = useTheme();
  const classes = useStyles(themes);
  // API
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [listUsers, setListUsers] = useState({});

  useEffect(() => {
    const customHeader = { "cubit-test": "Andres Calvo Ariza" };
    async function fetchData() {
      const result = await axios.get(`https://reqres.in/api/users?page=${page}`, { headers: customHeader });
      setListUsers(result.data);
    }
    fetchData();
  }, [page]);
  console.log(listUsers);
  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Paper elevation={4} className={classes.paper}>
        <Box className={classes.usersWrapper}>
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
        </Box>
        <Pagination className={classes.pagination} count={listUsers.total_pages} page={page} onChange={handlePageChange} />
      </Paper>
    </Container>
  );
}

export default Home;
