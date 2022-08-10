import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import "../App.css";

function Pokecard({ id, name }) {
  return (
    <div className="pokemons ma1 tc dib">
      <div class="detail-img">
        <Link to={`${id}`}>
          <img
            className="pokeimage"
            src={`https://reneg001.github.io/poke-sprites/src/${id}.svg`}
            alt=""
            width="120px"
          />
        </Link>
      </div>
      <Divider />
      <div className="pokenames tc dib pa1">
        <Link to={`${id}`}>{name}</Link>
      </div>
    </div>
  );
}

export default Pokecard;
