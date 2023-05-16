import { Container } from 'react-bootstrap';
import React from 'react';
import '../about/About.css';

const FuturePlans = () => (
  <Container>
    <div className="about-page">
      <h1>Bounty Board</h1>
      <p>
        The bounty board will be what allows for value exchange within the
        psitadel. <br />
        <br />
        Accept and post tasks for sats. <br />
        <br />
        nostr + bitcoin(ers) + psilocybin = great_things
      </p>
      <h2>Possible Bounties</h2>
      <ul>
        <li>Work trade on farms</li>
        <li>Help me grow oyster mushrooms</li>
        <li>Learn me a bitcoin node</li>
        <li>Graphic designs</li>
        <li>Event spaces</li>
        <li>
          Most importantly... we'll need a bounty to build the bounty board
        </li>
      </ul>
    </div>
  </Container>
);

export default FuturePlans;
