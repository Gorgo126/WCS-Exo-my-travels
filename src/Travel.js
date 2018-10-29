import React from "react"
import Travels from "./Travels";

const listing = [
    {
        destination:"Marseille",
        country:"Belgium",
        distance:"5 Km seulement",
        photo:"https://voyages-auchan.onelist.fr/Portals/24/01.JPG"
    },
    {
        destination:"Paris",
        country:"Belgium",
        distance:"5 Km seulement",
        photo:"https://voyages-auchan.onelist.fr/Portals/24/01.JPG"
    },
    {
        destination:"Case Blanca",
        country:"Belgium",
        distance:"335",
        photo:"https://voyages-auchan.onelist.fr/Portals/24/01.JPG"
    },
    {
        destination:"Jamaica",
        country:"Belgium",
        distance:"1200",
        photo:"https://voyages-auchan.onelist.fr/Portals/24/01.JPG"
    }
  ];
  
  const Travel = () => (
    <div>
      {listing.map(Liste => (
        <Travels destination={Liste.destination} country={Liste.country} photo={Liste.photo} distance={Liste.distance} />
                )
      )}
    </div>
  );

  export default Travel;