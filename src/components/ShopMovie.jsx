import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movies from "./Products";
import Trolley from "./Trolley";
import Search from "./InputSearchFilter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

let theme = createTheme();
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: createTheme().spacing(10),
    marginTop: "auto",
  },
}));
function ShowMovie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [trolley, setTrolley] = useState([]);
  const [charactersTrue, setCharactersTrue] = useState(true);
  let date = new Date().getFullYear();

  useEffect(() => {
    axios
      .get("http://localhost:3002/")
      .then((res) => {
        setMovies(res.data);
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const results = movies.filter((person) =>
      person.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <Header title="Tienda Virtual" date={date} />
      <Search
        charactersTrue={charactersTrue}
        setCharactersTrue={setCharactersTrue}
        setSearchTerm={setSearchTerm}
      />

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={9} sm={6}>
          <ThemeProvider theme={theme}>
            <Typography
              style={{ fontStyle: "italic", color: "#01579b" }}
              variant="h4"
            >
              Lista de Peliculas
            </Typography>
          </ThemeProvider>
          {searchResults.map((producto, index) => (
            <Movies
              producto={producto}
              key={index}
              trolley={trolley}
              setTrolley={setTrolley}
              movies={movies}
              item
            />
          ))}
        </Grid>

        <Grid item xs={9} sm={6}>
          <Trolley trolley={trolley} setTrolley={setTrolley} />
        </Grid>
      </Grid>
      <Footer date={date} />
    </>
  );
}

export default ShowMovie;
