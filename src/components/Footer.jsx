import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "3%",
    bottom: "0",
    textAlign: "center",
    backgroundColor: "tomato",
    color: "white",
    margin: "1%",
  },
}));

const Footer = ({ date }) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">Gabriel Pisoni&copy; {date}</Typography>
      </Container>
    </div>
  );
};

export default Footer;
