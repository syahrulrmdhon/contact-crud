import React from "react";
import { Col, Card, Button, CardTitle, CardText } from "reactstrap";

const CardContact = ({ item }) => {
  return (
    <Col md={4}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5">{`${item.firstName} ${item.lastName}`}</CardTitle>
        <CardText>
          <p>
            <label>Age: </label>
            {item.age}
          </p>
          <img
            style={{ width: "100%" }}
            alt="data-person"
            src={
              item.photo !== "N/A"
                ? item.photo
                : "https://i.stack.imgur.com/l60Hf.png"
            }
          />
        </CardText>
        <Button>See Details</Button>
      </Card>
    </Col>
  );
};

export default CardContact;
