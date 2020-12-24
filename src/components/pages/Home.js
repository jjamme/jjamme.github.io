import React from "react";
import { Card, ShortCard } from "../Cards";

import "../../styles/Home.css";
import LinkUpImage from "../../images/linkup.png";
import VulnBinImage from "../../images/vulnbin.png";
import CseSecImage from "../../images/cse_sec_ctf.jpg";
import WitIbmImage from "../../images/wit_ibm.png";

export default function Home() {
  return (
    <>
      <h1 class="collab-projects-header">Collaborative Projects</h1>
      <div class="projects-container">
        <Card
          title="LinkUpEvents - University Events Tracker"
          link="https://linkupevents.com.au"
          button="LIVE DEMO"
          subheading="Backend developer"
          image={LinkUpImage}
          description={`LinkUpEvents is a centralised source of events hosted by clubs and societies from Australian universities including UNSW, USyd and UniMelb.
          Aims to help students discover new societies and brings more exposure to smaller societies.
          LinkUpEvents is actively working with UNSW Arc to better support student academic and social life.`}
          tags={[
            { link: "https://reactjs.org/", title: "React" },
            { link: "https://www.javascript.com/", title: "JavaScript" },
            { link: "https://aws.amazon.com/", title: "AWS" },
            { link: "https://www.python.org/", title: "Python" },
          ]}
        />
      </div>
      <br />
      <h1 class="personal-projects-header">Personal Projects</h1>
      <div class="projects-container">
        <Card
          title="Vulnerable binaries"
          link="https://github.com/jjamme/vulnerable_binaries"
          button="REPOSITORY"
          subheading="C Developer"
          image={VulnBinImage}
          description={`A collection of binary programs written in C.
          Vulnerabilities are intentionally added
          `}
          tags={[
            {
              link: "https://en.wikipedia.org/wiki/C_(programming_language)",
              title: "C",
            },
          ]}
        />
      </div>
      <br />
      <h1 class="other-header">Other</h1>
      <div class="task-container">
        <ShortCard
          title="UNSW CSESoc x SecSoc CTF"
          link="https://www.facebook.com/events/csesoc-unsw/csesoc-x-secsoc-ctf/2951826274854928/"
          button="LINK"
          subheading="2nd Place"
          image={CseSecImage}
          description={``}
          tags={[
            {
              link: "https://docs.pwntools.com/en/stable/",
              title: "Python - pwntools",
            },
            { link: "https://github.com/pwndbg/pwndbg", title: "GDB - pwndbg" },
          ]}
        />
        <ShortCard
          title="UNSW WIT x IBM Code & Conquer"
          link="https://www.facebook.com/events/959606607781668/"
          button="LINK"
          subheading="3rd Place"
          image={WitIbmImage}
          description={`sadf`}
          tags={[
            { link: "https://www.python.org/", title: "Python" },
            { link: "", title: "Algorithms" },
          ]}
        />
      </div>
      <br />
    </>
  );
}
