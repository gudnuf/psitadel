import { Fragment } from 'react';
import { Row } from 'react-bootstrap';

import ValuesItem from './ValuesItem';
import values from '../../../data/valuesData.js';

const Values = () => {
  const renderValues = () =>
    values.map((value, index) => (
      <Fragment key={index}>
        <ValuesItem
          value={value.value}
          icon={value.icon}
          description={value.description}
        />
      </Fragment>
    ));

  return (
    <>
      <Row className="justify-content-center">
        <div className="section-title">Our Values</div>
      </Row>
      <Row>{renderValues()}</Row>
    </>
  );
};

export default Values;
