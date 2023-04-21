import { Card, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';

import OnChainDonation from './OnChainDonation';
import LightningDonation from './LightningDonation';

const DonationQrs = () => {
  const [activeTab, setActiveTab] = useState('lightning');

  return (
    <Card>
      <Card.Header>
        <Nav
          fill
          variant="tabs"
          defaultActiveKey="#lightning"
          className="donate-card-nav"
        >
          <Nav.Item>
            <Nav.Link
              href="#lightning"
              onClick={() => setActiveTab('lightning')}
            >
              Lightning
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#onChain" onClick={() => setActiveTab('onChain')}>
              On Chain
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        {activeTab === 'lightning' ? (
          <LightningDonation />
        ) : (
          <OnChainDonation />
        )}
        <Card.Text>
          For now, this is a static QR. We cannot verify that your donation was
          recieved, however it's more than likely that it will be. If you have
          any concerns please reach out to any Psitadel members.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DonationQrs;
