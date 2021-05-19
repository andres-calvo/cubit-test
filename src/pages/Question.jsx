import { Container, Paper, makeStyles, useTheme, Typography, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ReactEmbedGist from "react-embed-gist";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  paper: {
    padding: "16px",
    "& p": {
      lineHeight: "1.6",
    },
    "& h6": {
      margin: "10px 0",
    },
  },
}));
function Question() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Container className={classes.wrapper} maxWidth="md">
      <Paper elevation={4} className={classes.paper}>
        <Typography variant="h6" bold>
          ¿Qué permite la implementación de un interceptor?
        </Typography>
        <Typography component="p">
          Para los requests a la <strong>API</strong> de <strong>reqres.in</strong> usé <strong>Axios</strong>, el cual me permite pasarle una url y
          unas opciones personalizables. Dentro de dichas opciones personalizables existe la posibilidad de añadir un <strong>custom header</strong>.
          Como se observa en el siguiente codigo:
        </Typography>
        <ReactEmbedGist gist="andres-calvo/ef1a23055e1608a1187dff4a06fea7c0" />
        <Typography variant="h6" bold>
          ¿Cuándo implementar un guard?
        </Typography>
        <Typography component="p">
          Planteemos el siguiente ejemplo, me encuentro desarrollando una <strong>APP</strong> que cuenta con auntentificación, tengo rutas en mi
          aplicacion las cuales requieren que el usuario este autentificado, por ello necesito implementar un <strong>guard</strong> a dichas rutas
          para protegerlas de usuarios no autentificados, redireccionadolos por ejemplo al Login Page.
        </Typography>
        <Box>
          <Typography variant="h6" bold>
            Que es una prueba unitaria, prueba de servicio y prueba de componente (Definirlo con sus propias palabras)
          </Typography>
          <p>
            <strong>Las pruebas unitarias</strong> son código que me permite verificar unidades de código que he escrito como funciones, siendo una de
            sus características la posibilidad de automatizarlas. Además permiten que cuando se hagan cambios, como añadir nuevas features a mi app,
            estas features no rompan el código ya existente.
          </p>
          <p>
            <strong>Las pruebas de servicio</strong> son necesarias para asegurarnos que el funcionamiento de toda la aplicación sea correcto. Es
            decir nuestra lógica de servicio sea la esperada y no existan fallos entre la interacción de un componente con otro.
          </p>
          <p>
            <strong>Las pruebas de componente</strong> se ejecutan de manera independiente, es decir una prueba no afecta a la otra. Su objetivo es
            corroborar que los distintos módulos de mi código, se ejecutan de la forma deseada, verificando su funcionalidad.
          </p>
        </Box>
        <Box>
          <Typography variant="h6" bold>
            Explicar brevemente cómo se manejan los estados de las variables, uso de hooks (useEffect, useState)
          </Typography>
          <p>
            <strong>useState</strong> se usa para definir un estado en un componente funcional, dicho hook fue usado en varias partes de la APP, en el
            código proporcionado a continuación fue usado para manejar el estado abierto(
            <MenuIcon></MenuIcon>) o cerrado(<CloseIcon></CloseIcon>) del componente <strong>NavigationMobile</strong> que se encuentra en el archivo
            <strong> Header.js</strong>
          </p>
          <ReactEmbedGist gist="andres-calvo/de54b429027ba5acdac1aa1fdef0325d" />
          <p>
            <strong>open </strong>representa la variable donde se guardará el estado y <strong>setOpen</strong> es una función que permite cambiar
            dicho estado. La función auxiliar <strong>openMenu</strong> se redactó para un tener un código más declarativo.
          </p>
          <p>
            <strong>useEffect</strong> se usa para ejecutar una función después de que el componente sea renderizado en la pantalla, dicho hook fue
            usado para hacer las <strong>API</strong> Request y se le pasó como dependencia la variable <strong>page</strong>, de tal forma que cuando
            se cambie de paginación se haga un nuevo llamado a la <strong>API</strong>. Como se muestra en el código a continuación:
          </p>
          <ReactEmbedGist gist="andres-calvo/e0a2a1c70459a2a673276d05de10730e" />
        </Box>
      </Paper>
    </Container>
  );
}

export default Question;
