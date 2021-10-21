import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Producto from "./Products";

let theme = createTheme();
theme = responsiveFontSizes(theme);
theme.typography.h4 = {
  fontStyle: "italic",
  color: "white",
};

const Trolley = ({ trolley, setTrolley }) => {
  let total = () => {
    var total = trolley.map((element) => {
      return element.Precio;
    });
    var complet = total.reduce((a, b) => a + b, 0);
    return complet;
  };

  return (
    <div
      style={{
        border: "8px solid rgba(136, 93, 241, 0.8)",
        borderRadius: "26px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" color="green">
          Lista de Compras
        </Typography>
      </ThemeProvider>
      <Typography variant="h4" component="div">
        Unidades : {trolley.length}{" "}
      </Typography>
      <Typography variant="h4" component="div">
        Total :{total()}
      </Typography>

      {trolley.length === 0 ? (
        <Typography paragraph={true}>No hay Peliculas seleccionadas</Typography>
      ) : (
        trolley.map((producto, index) => (
          <Producto
            key={index}
            producto={producto}
            trolley={trolley}
            setTrolley={setTrolley}
          />
        ))
      )}
    </div>
  );
};

export default Trolley;
