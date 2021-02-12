import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const ListGroupItem = ({ course, name, desc }) => {
  const [toggle, toggleDesc] = useState(false);
  const onClick = () => toggleDesc(!toggle);
  return (
    <ListGroup.Item variant="dark" style={{cursor: "pointer"}} onClick={onClick}>
      <b>{course}</b>
      <br />
      {name}
      <br />
      { toggle ? desc : null }
    </ListGroup.Item>
  );
};

export default ListGroupItem;
