import React from "react";
import { ListGroup } from "react-bootstrap";

const ListGroupItem = ({course, name}) => {
  return (
    <ListGroup.Item variant="dark" style={{ width: "20vw" }}>
      {course}
      <br />
      {name}
    </ListGroup.Item>
  );
};

export default ListGroupItem;
