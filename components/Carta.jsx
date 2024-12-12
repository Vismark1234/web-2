import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function Carta() {
  return (
    <Row>
      {/* Fila 1 con 3 columnas */}
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button><a href='/'>r al lugar</a>I</Button>
          </CardBody>
        </Card>
      </Col>

      {/* NUEVA FILA*/}
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Ir al lugar</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
