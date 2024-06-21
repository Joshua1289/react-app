// src/Name.js

import React from 'react';

const Name = ({ name }) => {
  return <h2>{name}</h2>;
};

export default Name;
// src/Price.js

import React from 'react';

const Price = ({ price }) => {
  return <p>{price}</p>;
};

export default Price;
// src/Description.js

import React from 'react';

const Description = ({ description }) => {
  return <p>{description}</p>;
};

export default Description;
// src/Image.js

import React from 'react';

const Image = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Product" style={{ maxWidth: '100%', height: 'auto' }} />;
};

export default Image;
// src/App.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = "John"; // Replace with your first name

const App = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} style={{ maxWidth: '100%', height: 'auto' }} />
            <Card.Body>
              <Name name={product.name} />
              <Price price={product.price} />
              <Description description={product.description} />
            </Card.Body>
          </Card>
          <p className="mt-3">Hello, {firstName ? firstName : 'there'}!</p>
          {firstName && <Image imageUrl={product.image} />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
