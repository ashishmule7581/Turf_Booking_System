import React from "react";
import Cards from "../Cards";
import Announcement from "../Announcement";
import PlayerFinder from "../PlayerFinder";

function Services() {
  return (
    <>
      <Cards />
      <h1 className="text-center">Announcement Section</h1>
      <Announcement/>
      <PlayerFinder/>
    </>
  );
}

export default Services;