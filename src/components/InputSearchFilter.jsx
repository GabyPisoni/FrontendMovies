import React from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/lab/Alert";
import Typography from "@mui/material/Typography";

const InputSearchFilter = ({
  charactersTrue,
  setCharactersTrue,
  setSearchTerm,
}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const regexValidation = /^[:A-Za-z0-9\s]+$/g;

    const reg = regexValidation.test(event.target.value);
    if (reg || 0 === event.target.value.length) {
      return setCharactersTrue(true);
    } else {
      return setCharactersTrue(false);
    }
  };

  return (
    <div>
      <form>
        {charactersTrue ? (
          <TextField
            type="text"
            name="search"
            id="search"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            style={{ padding: 2 }}
            placeholder="Busque una pelicula"
            fullWidth
          />
        ) : (
          <div>
            <TextField
              error
              id="outlined-error-helper-text"
              helperText="Ingrese solo numeros o letras"
              variant="outlined"
              style={{ padding: 25 }}
              onChange={(e) => handleChange(e)}
            />
            <Alert variant="filled" severity="error">
              Error Ingresa Caracteres Validos y el nombre de la pelicula
              incluidos los :
              <Typography paragraph={true}>
                * Numeros o letras , espacios y 2 puntos
              </Typography>
              <Typography paragraph={true}>
                Vuelve a ingresar caracteres validos para que desaparezca volver
                a buscar el titulo de la pelicula que quieres comprar
              </Typography>
            </Alert>
          </div>
        )}
      </form>
    </div>
  );
};

export default InputSearchFilter;
