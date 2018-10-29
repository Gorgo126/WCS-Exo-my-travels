import React from "react";

const Travels = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <p>{destination}</p>
      <cite>{country}</cite>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);




export default Travels;