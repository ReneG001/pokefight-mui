import React, { useState, useEffect } from "react";
import { AppBar, Grid, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import "../App.css";

function PokeDetail() {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const { pokemon } = useParams();

  useEffect(() => {
    fetchName();
    // console.log(match);
  }, []);

  const fetchName = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      // .then(detail => console.log(detail));
      .then((detail) => setPokemonDetail(detail));
  };

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

          <h2>Pokemon Skills</h2>
          {/* <SearchBar handleSearch={searchChange} /> */}
        </div>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs detailleft>
          <Link to={`/`}>
            <img src="/Images/arrow-left.png" alt="" />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <div className="details-card">
            <div>
              <img
                src={`https://reneg001.github.io/poke-sprites/src/${pokemon}.svg`}
                alt=""
                width="160"
              />
            </div>
            <Divider />
            <div className="details dib">
              ID: {pokemonDetail.id}
              <br />
              name: {pokemonDetail.name}
              <br />
              height: {pokemonDetail.height}
              <br />
              weight: {pokemonDetail.weight}
              <br />
              type: {pokemonDetail.types && pokemonDetail.types[0].type.name}
              <br />
              abilities:{" "}
              {pokemonDetail.abilities &&
                pokemonDetail.abilities[0].ability.name}
            </div>
            <div>
              <Divider />
            </div>
          </div>
        </Grid>
        <Grid item xs detailright>
          <Link to={`/pokefight/${pokemon}`}>
            <img src="/Images/arrow-right.png" alt="" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default PokeDetail;
