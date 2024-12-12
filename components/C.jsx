import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';

export default function C() {
  return (
    <div>
      {/* Primera fila con dos cartas */}
      <Row>
        <Col sm="12" md="6">
          <Card style={{ width: '18rem' }}>
            <img
              alt="Sample"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e0/69/b0/punto-de-encuentro.jpg?w=1000&h=-1&s=1"
              className="card-img-top"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 1</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle 1</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </CardText>
              <Button>Button 1</Button>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6">
          <Card style={{ width: '18rem' }}>
            <img
              alt="Sample"
              src="https://vision360-s3.cdn.net.ar/s3i233/2024/05/vision360/images/79/08/790803_8497a44a722543eb39af713d33c16bcb140f6969d5213fd0ece03148e62e461e/md.webp" 
              
              className="card-img-top"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 2</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle 2</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </CardText>
              <Button>Button 2</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Segunda fila con dos cartas */}
      <Row>
        <Col sm="12" md="6">
          <Card style={{ width: '18rem' }}>
            <img
              alt="Sample"
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 3</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle 3</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </CardText>
              <Button>Button 3</Button>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6">
          <Card style={{ width: '18rem' }}>
            <img
              alt="Sample"
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 4</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle 4</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </CardText>
              <Button>Button 4</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Tercera fila con dos cartas */}
      <Row>
        <Col sm="12" md="6">
          <Card style={{ width: '18rem' }}>
            <img
              alt="Sample"
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 5</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle 5</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </CardText>
              <Button>Button 5</Button>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6">
          <Card style={{ width: '18rem' }}>
            <img
              alt="Sample"
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 6</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle 6</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </CardText>
              <Button>Button 6</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Puedes seguir agregando más filas con el mismo patrón */}
    </div>
  );
}
