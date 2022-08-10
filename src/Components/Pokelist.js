import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
import { AppBar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "../App.css";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);
  const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
      paddingTop: "30px",
      paddingLeft: "50px",
      paddingRight: "50px",
      justifyContent: "center"
    }
  }));
  // const [search, setSearch] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://blooming-bayou-85292.herokuapp.com/pokemon")
      .then((response) => response.json())
      //.then(pokes => console.log(pokes));
      .then((pokes) => setPokemons(pokes));
  };

  // const searchChange = event => {
  //   setSearch(event.target.value);
  // };
  // console.log(search);

  // const filterPokemons = pokemons.filter(pokemon => {
  //   return pokemon.name.includes(search.toLowerCase());
  // });

  return (
    <div className="App">
      <AppBar position="static">
        <div className="pokedex">
          <a href="/">
            <img
              src="/Images/pika-top.png"
              alt=""
              width="180px"
              height="120px"
            />
          </a>
          <h2>The Pokelist</h2>
          {/* <SearchBar handleSearch={searchChange} /> */}
        </div>
      </AppBar>

      <Grid container spacing={2} className={classes.pokedexContainer}>
        {pokemons.map((pokemon, i) => (
          <Pokecard id={i + 1} key={i} name={pokemon.name.english} />
        ))}
      </Grid>
    </div>
  );
}
export default Pokelist;
