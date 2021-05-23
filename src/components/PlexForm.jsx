import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  Col,
  Card,
  Spinner
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import * as axios from "axios";

const PlexForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [isTVShow, setIsTVShow] = useState(false);
  const [loading, setLoading] = useState(null);
  // const [list, setList] = useState([]);
  // [{title: "Avengers", year: "", isShow: false}]

  const submitForm = e => {
    e.preventDefault();
    if (!name) return alert("Please enter your name");
    if (!title) return alert("Please add a title"); // && !list

    // if (title)
    //   setList((list) => [...list, { title: title, year: year, isShow: isTVShow }]);

    // console.log(name, title, year, isTVShow ? "TV Show" : "Movie");
    let list = [{title: title, year: year, isShow: isTVShow}];
    setLoading(true);
    axios.post("https://us-central1-personal-site-fda9e.cloudfunctions.net/sendPlexForm", {name: name, list: list})
      .then(res => {
        alert(`Plex request sent!`);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  // const handleAddAnother = (e) => {
  //   e.preventDefault();
  //   if (!title) return alert("Please add a movie or tv show title");
  //   // !list ?
  //   //   setList([{ title: title, year: year, type: type }]) :
  //   //   setList(list => [...list, { title: title, year: year, type: type }]);
  //   // if(list === []) {
  //   //   console.log("setting list, false")
  //   //   setList(list => [{ title: title, year: year, type: type }]);
  //   // } else {
  //   //   console.log("setting list, true")
  //   //   setList(list => [...list, { title: title, year: year, type: type }]);
  //   // }
  //   setList((list) => [...list, { title: title, year: year, type: type }]);
  //   setTitle("");
  //   setYear("");
  //   console.log(name);
  //   // console.log(list); // ?
  // };

  // const handleDeleteItem = (e) => {
  //   e.preventDefault();
  //   setList((list) => list.filter((item) => item !== e.target.value));
  // };

  return (
    <Container id="plex_form">
      <Form onSubmit={submitForm}>
        <Form.Text as={Card.Title}>Submit a request for Plex</Form.Text>
        <Form.Group style={{ marginLeft: "1vw" }}>
          <Form.Row>
            <Form.Group as={Col} sm="auto">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm="auto">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a movie/show title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm="auto">
              <Form.Label>Year (Optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the release year"
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row style={{ marginBottom: "3vh" }}>
            {/* <Form.Check type="switch" id="tv show" label="TV Show?" onChange={() => {setIsTVShow(!isTVShow); console.log(isTVShow);}} /> */}
            <BootstrapSwitchButton
              width={100}
              checked={isTVShow}
              onlabel="TV Show"
              offlabel="Movie"
              onstyle="outline-info"
              offstyle="outline-info"
              onChange={(checked) => {
                setIsTVShow(!isTVShow);
              }}
            />
            <ButtonGroup style={{ marginLeft: "2vw" }}>
              {/* <Button variant="light" onClick={handleAddAnother}>
                    Add another
                  </Button> */}
              {loading ? <Spinner animation="border" variant="info" /> : <Button variant="info" type="submit">
                Submit
              </Button>}
            </ButtonGroup>
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PlexForm;
