import { Fragment } from 'react';
import { Row } from 'react-bootstrap';

import ValuesItem from './ValuesItem';
import values from '../../../data/valuesData.js';

const Values = () => {
  const renderValues = () =>
    values.map((value, index) => (
      <ValuesItem
        key={index}
        value={value.value}
        img={value.img}
        description={value.description}
      />
    ));

  return (
    <Row className="mt-5 values">
      <Row className="">
        <h2 className="values">Our Values</h2>
      </Row>
      <Row>{renderValues()}</Row>
    </Row>
  );
};

export default Values;
