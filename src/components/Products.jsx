import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Card,
  Grid,
  CardContent,
  Divider,
  Typography,
  CardMedia,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "2%",
  },
  card: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      padding: "30",
      color: "blue",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: 20,
  },
  divider: {
    margin: 12,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  title: {
    color: "#ff9800",
  },
  fuente: {
    fontFamily: ["Roboto"].join(","),
  },
}));

const Movies = ({ producto, trolley, setTrolley, movies }) => {
  const { Precio, Titulo, id, Foto, Fecha_de_Estreno, Duracion, Compañia } =
    producto;
  const handleClick = (id) => {
    let product = movies.filter((element) => element.id === id)[0];
    product.compra = true;
    setTrolley([...trolley.concat(product)]);
  };
  const handleDelete = (id) => {
    let value = id;
    let i = 0;
    while (i <= 7 && trolley[i].id !== value) {
      i = i + 1;
    }
    const indicator = i;
    let eliminateMove = trolley.filter((element, index) => {
      return index !== indicator;
    });

    setTrolley(eliminateMove);
  };
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      className={classes.grid}
    >
      <Grid item xs={9} sm={6}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={Foto} />
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" components="div">
              {Titulo}
            </Typography>
            <Typography paragraph={true} className={classes.fuente}>
              Fecha de estreno : {Fecha_de_Estreno}
            </Typography>
            <Typography paragraph={true} className={classes.fuente}>
              Duracion de la Pelicula : {Duracion}
            </Typography>
            <Typography paragraph={true} className={classes.fuente}>
              Compañia : {Compañia}
            </Typography>
            {Precio}$
            <Divider className={classes.divider} light />
            {movies ? (
              <Button
                variant="contained"
                color="primary"
                type="button"
                id="comprar"
                onClick={() => handleClick(id)}
              >
                <ShoppingCartIcon></ShoppingCartIcon> Comprar
              </Button>
            ) : (
              <Fragment>
                <Typography variant="h4" style={{ color: "green" }}>
                  <CheckCircleIcon></CheckCircleIcon> Producto Añadido A Carrito
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  id="comprar"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon></DeleteIcon>Eliminar
                </Button>
              </Fragment>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Movies;
