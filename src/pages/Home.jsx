import { Container, makeStyles, Paper, useTheme } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import CardUser from "../components/CardUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "20px",
    marginBottom: "20px",
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

const containerVariations = {
  start: {},
  end: {},
};

const cardVariations = {
  start: {
    opacity: 0,
    x: "-100%",
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

function Home() {
  const themes = useTheme();
  const classes = useStyles(themes);
  // API
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [listUsers, setListUsers] = useState({ data: [] });

  useEffect(() => {
    const customHeader = { "cubit-test": "Andres Calvo Ariza" };
    async function fetchData() {
      const result = await axios.get(`https://reqres.in/api/users?page=${page}`, { headers: customHeader });
      setListUsers(result.data);
    }
    fetchData();
  }, [page]);

  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Paper elevation={4} className={classes.paper}>
        <motion.div variants={containerVariations} initial="start" animate="end" className={classes.usersWrapper}>
          {listUsers.data.map((user, key) => {
            return (
              <motion.div variants={cardVariations} key={key}>
                <CardUser id={user.id} first_name={user.first_name} last_name={user.last_name} email={user.email} src={user.avatar}></CardUser>
              </motion.div>
            );
          })}
        </motion.div>
        <Pagination className={classes.pagination} count={listUsers.total_pages} page={page} onChange={handlePageChange} />
      </Paper>
    </Container>
  );
}

export default Home;
