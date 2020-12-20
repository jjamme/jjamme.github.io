import React from "react";
import Cards from "../Cards";

import "../../styles/Home.css";
import LinkUpImage from "../../images/linkup.png";

export default function Home() {
  return (
    <>
      <h1 class="home-header">Collaborative Projects</h1>
      <div class="card-container">
        <Cards
          title="LinkUp Events"
          link="https://linkupevents.com.au"
          subheading="Backend developer"
          image={LinkUpImage}
          description="bruh descriptoin
          asldfkjasdfklj
          asdflkjasdfaklsjdfa
          dfjas
          dflkasjdfaskdjf"
        />
        <Cards title="sadf" />
      </div>
    </>
  );
}
